//点击列表好友
var onclickFriend =function (user) {
    var friendMessageHead = document.getElementById("friend-message-head");
    //判断是否要清除聊天框
    if (user !== friendMessageHead.innerHTML) {
        $("#message-dialog-box").empty();
    }
    friendMessageHead.innerHTML = user;
};
//显示好友列表方法
var viewFriendList = function (userId) {
    var fatherDiv = document.getElementById("friend-list");
    var ul = document.createElement("ul");
    var li = document.createElement("li");
    var span1 = document.createElement("span");
    var span2 = document.createElement("span");
    var button2 = document.createElement("button");
    var span2Text = document.createTextNode(userId);
    var button2Text = document.createTextNode("删除");

    ul.setAttribute("id",userId);

    span1.setAttribute("class","glyphicon glyphicon-user");
    span2.setAttribute("class","friend-user");
    span2.appendChild(span2Text);

    button2.setAttribute("class","button-message");
    button2.setAttribute("onclick","onClickDelFriendButton('"+userId+"')");
    button2.appendChild(button2Text);

    li.appendChild(span1);
    li.appendChild(span2);
    li.appendChild(button2);
    ul.appendChild(li)
    fatherDiv.appendChild(ul);
}
//显示聊天列表方法
var viewMessageList = function (userId) {
    var fatherDiv = document.getElementById("chat-box-friend-list");
    var li = document.createElement("li");
    var text = document.createTextNode(userId);
    li.setAttribute("onclick","onclickFriend('"+userId+"')");
    li.appendChild(text);
    fatherDiv.appendChild(li);
}
//好友列表中删除好友
var onClickDelFriendButton = function (user) {
    //删除好友列表中的
    $("#"+user).remove();
    var requestUser = document.getElementById('id-state').innerText;
    //删除聊天列表中的
    var list = document.getElementById('chat-box-friend-list').getElementsByTagName('li');
    for (var i = 0; i < list.length; i++) {
        if (list[i].innerText === user ) {
            list[i].remove();
        }
    }
    document.getElementById("friend-message-head").innerText = list[0].innerText
    //利用AJax传输到Mysql
    var request = new XMLHttpRequest();
    var url = "http://localhost/blog3/php/deleteFriend.php?requestUser="+requestUser+"&receiveUser="+user;
    request.open("GET",url);
    request.send();
    request.onreadystatechange = function () {
        if (request.readyState == 4) {
            if (request.status == 200 || request.status == 304) {
                var socket = io('http://127.0.0.1:3120');
                socket.emit('chat message', ["friendAdd", user]);
                socket.on(user, function (msg) {
                });
            }
        }
    }
};

//好友请求同意
var onClickOk = function (user) {
    var userId = String(user);
    var requestUser = document.getElementById('id-state').innerText;
    //利用AJax传输到Mysql
    var request = new XMLHttpRequest();
    var url = "http://localhost/blog3/php/insertFriendOk.php?requestUser="+requestUser+"&receiveUser="+userId;
    request.open("GET",url);
    request.send();
    request.onreadystatechange = function () {
        if (request.readyState == 4) {
            if (request.status == 200 || request.status == 304) {
                var socket = io('http://127.0.0.1:3120');
                socket.emit('chat message',["friendAdd",userId]);
                socket.on(userId, function(msg){
                });
            }
        }
    }
    viewFriendList(userId);
    viewMessageList(userId);
    $("#"+userId).remove();
};

//好友请求拒绝
var onClickNo = function (user) {
    var userId = String(user);
    var requestUser = document.getElementById('id-state').innerText;
    //利用AJax传输到Mysql
    var request = new XMLHttpRequest();
    var url = "http://localhost/blog3/php/insertFriendNo.php?requestUser="+requestUser+"&receiveUser="+userId;
    request.open("GET",url);
    request.send();
    request.onreadystatechange = function () {
        if (request.readyState == 4) {
            if (request.status == 200 || request.status == 304) {
                //console.log(request.responseText);
                var socket = io('http://127.0.0.1:3120');
                socket.emit('chat message',["friendAdd",userId]);
                socket.on(userId, function(msg){
                });
            }
        }
    }
    //利用AJax传输到Mysql
    $("#"+userId).remove();
};



