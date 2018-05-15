//显示好友列表方法
var viewFriendList = function (userId) {
    var fatherDiv = document.getElementById("friend-list");
    var ul = document.createElement("ul");
    var li = document.createElement("li");
    var span1 = document.createElement("span");
    var span2 = document.createElement("span");
    var button1 = document.createElement("button");
    var button2 = document.createElement("button");
    var span2Text = document.createTextNode(userId);
    var button1Text = document.createTextNode("私信");
    var button2Text = document.createTextNode("删除");

    ul.setAttribute("id",userId);

    span1.setAttribute("class","glyphicon glyphicon-user");
    span2.setAttribute("class","friend-user");
    span2.appendChild(span2Text);

    button1.setAttribute("class","button-message");
    button1.setAttribute("onclick","onClickMessage('"+userId+"')");
    button1.appendChild(button1Text);

    button2.setAttribute("class","button-message");
    button2.setAttribute("onclick","onClickDelFriend('"+userId+"')");
    button2.appendChild(button2Text);

    li.appendChild(span1);
    li.appendChild(span2);
    li.appendChild(button1);
    li.appendChild(button2);
    ul.appendChild(li)
    fatherDiv.appendChild(ul);
}
//给好友发私信
var onClickMessage = function (user) {
    alert(user);
}
//删除好友
var onClickDelFriend = function (user) {
    $("#"+user).remove();
    var requestUser = document.getElementById('id-state').innerText;
    //利用AJax传输到Mysql
    var request = new XMLHttpRequest();
    var url = "http://localhost/blog3/php/deleteFriend.php?requestUser="+requestUser+"&receiveUser="+user;
    request.open("GET",url);
    request.send();
    request.onreadystatechange = function () {
        if (request.readyState == 4) {
            if (request.status == 200 || request.status == 304) {
                var socket = io('http://127.0.0.1:3120');
                socket.emit('chat message',["friendAdd",user]);
                socket.on(user, function(msg){
                });
            }
        }
    }
}

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

var user = document.getElementById('id-state').innerText;
var socket = io('http://127.0.0.1:3120');
// 触发服务端的chat message事件
socket.emit('chat message',["friendAdd" , user]);
// 服务端通过emit('chat message from server', $msg)触发客户端的chat message from server事件
socket.on(String(user), function(msg){
    var div_add = document.getElementById("friend-add");
    $("#friend-add").empty();
    $("#friend-list").empty();
    if (msg[0] === "friendAdd" && msg.length > 2) {
        var friendAddListLength;
        var friendRefuseLength;
        for (var i = 1; i < msg.length; i++) {
            if (msg[i] === "refuseFriend") {
                friendAddListLength = i;
            }
            if (msg[i] === "friendList") {
                friendRefuseLength = i;
                break;
            }
        }
        //好友添加框
        for (var i = 1; i < friendAddListLength; i++) {
            var div = document.createElement("div");
            var p = document.createElement("p");
            var p_text = document.createTextNode(msg[i]);
            var button1 = document.createElement("button");
            var button1_text = document.createTextNode("同意");
            var button2 = document.createElement("button");
            var button2_text = document.createTextNode("拒绝");

            div.setAttribute("class","message-box");
            div.setAttribute("id",msg[i]);
            button1.setAttribute("onclick","onClickOk('" + msg[i]+"')" );
            button2.setAttribute("onclick","onClickNo('" + msg[i]+"')" )
            p.appendChild(p_text);
            button1.appendChild(button1_text);
            button2.appendChild(button2_text);
            div.appendChild(p);
            div.appendChild(button1);
            div.appendChild(button2);
            div_add.appendChild(div);
        }
        //消息弹窗
        for (var i = friendAddListLength + 1; i < friendRefuseLength; i++) {
            alert(msg[i] + " 拒绝了你的好友添加请求");
            //利用AJax传输到deleteFriend.php
            var requestUser = document.getElementById('id-state').innerText;
            //利用AJax传输到Mysql
            var request = new XMLHttpRequest();
            var url = "http://localhost/blog3/php/deleteFriend.php?requestUser="+requestUser+"&receiveUser="+msg[i];
            request.open("GET",url);
            request.send();
        }
        //好友列表
        for (var i = friendRefuseLength + 1; i < msg.length; i++) {
            viewFriendList(msg[i]);
        }
    }
});