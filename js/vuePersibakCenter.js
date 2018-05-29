var vue = new Vue ({
    el: "#app",
    data: {

    },
    components: {
        'my-search-and-friend-list': {
            template: '' +
            '<div class="container">' +
            '   <h1 class="text-center">个人中心</h1>\n' +
            '   <div class="col-lg-6 col-sm-9 col-md-12 col-xs-12" >\n' +
            '       <h2 class="text-center">用户搜索</h2>\n' +
            '       <div id="search-user">\n' +
            '           <input id="input-user" type="text">\n' +
            '           <p id="button_search" class="glyphicon glyphicon-search" @click="search"></p><br>\n' +
            '           <div id="view-user"></div>\n' +
            '           <button class="hidden" id="button-add-id" @click="addFriend">添加</button>' +
            '       </div>\n' +
            '       <slot name="message-box">\n' +
            '       </slot>' +
            '       ' +
            '       <div id="chat-box" class="yyx">'+
            '            <div id="chat-box-friend-list">' +
            '            </div>' +
            '            <div id="chat-box-message">' +
            '               <p id="friend-message-head"></p>' +
            '               <div id="message-dialog-box">' +
            '               </div>' +
            '               <div id="message-send-out">' +
            '                   <textarea rows="2" id="text-area-message-send-out"></textarea>' +
            '                   <button @click="subMessage">提交</button>' +
            '               </div>' +
            '            </div>' +
            '        </div>' +
            '        ' +
            '   </div>' +
            '   <div class="col-lg-6 col-sm-3 col-md-12 col-xs-12">\n' +
            '       <h2 class="text-center">好友列表</h2>\n' +
            '       <div id="friend-list"></div>\n'+
            '       <div id="friend-message">' +
            '           <button @click="hiddenChatBox" class="text-center"><span class="glyphicon glyphicon-envelope"></span></button>' +
            '           <span>在线聊天</span>' +
            '       </div>\n' +
            '   </div>' +
            '</div>',
            data: function () {
                return {
                    state:true,
                    friendListArray:[]
                }
            },
            created:function () {
                var friendServer = function () {
                    var user = document.getElementById('id-state').innerText;
                    var socket = io('http://127.0.0.1:3120');
                    // 触发服务端的chat message事件
                    socket.emit('chat message',["friendAdd" , user]);
                    // 服务端通过emit('chat message from server', $msg)触发客户端的chat message from server事件
                    socket.on(String(user), function(msg){
                        var div_add = document.getElementById("friend-add");
                        $("#friend-add").empty();
                        $("#friend-list").empty();
                        $("#chat-box-friend-list").empty();
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
                                viewMessageList(msg[i]);
                                document.getElementById("friend-message-head").innerText = msg[i];
                            }
                        }
                    });
                };
                var messageServer = function () {
                    var user = document.getElementById('id-state').innerText;
                    var socket = io('http://127.0.0.1:3120');
                    socket.emit('friend message',[user,"sdwqdasdasdqwdxzczxasdqwxzcasdqwzxcdqwasdwqasd@@@@@####$$$%%^^&&"]);
                    socket.on(user+"Message",function (msg) {
                        if (msg[1] !== "sdwqdasdasdqwdxzczxasdqwxzcasdqwzxcdqwasdwqasd@@@@@####$$$%%^^&&") {
                            if (msg[0] !== document.getElementById("friend-message-head").innerText) {
                                $("#message-dialog-box").empty();
                            }
                            document.getElementById("friend-message-head").innerText = msg[0];
                            var fatherDiv = document.getElementById("message-dialog-box");
                            var span = document.createElement("span");
                            var spanText = document.createTextNode(msg[1]);
                            span.appendChild(spanText);
                            span.setAttribute("class","friend-send-message");
                            fatherDiv.appendChild(span);
                            console.log(msg[1] + "+" + msg[0]);
                        }
                    })
                };
                window.onload = function () {
                    friendServer();
                    messageServer();
                }
            },
            methods: {
                hiddenChatBox: function () {
                    if (this.state) {
                        document.getElementById("chat-box").className = "hidden";
                        this.state  = !this.state;
                    }else {
                        document.getElementById("chat-box").className = "yyx";
                        this.state  = !this.state;
                    }
                },
                subMessage: function () {
                    //发送消息到服务器
                    var receiveUser = document.getElementById("friend-message-head").innerText;
                    var requestUser = document.getElementById("id-state").innerText;
                    var text = document.getElementById("text-area-message-send-out").value;
                    var socket = io('http://127.0.0.1:3120');
                    socket.emit('friend message',[receiveUser,text,requestUser]);
                    socket.on(receiveUser+"Message",function (msg) {
                    });
                    //写入到聊天框
                    var fatherDiv = document.getElementById("message-dialog-box");
                    var span = document.createElement("span");
                    var spanText = document.createTextNode(text);
                    span.appendChild(spanText);
                    span.setAttribute("class","myself-send-message");
                    fatherDiv.appendChild(span);
                    document.getElementById("text-area-message-send-out").value = " ";
                    //滚动条始终保持最底部
                    var div = document.getElementById("message-dialog-box");
                    div.scrollTop = div.scrollHeight;
                    //
                },
                search: function () {
                    var requestUser = document.getElementById('id-state').innerText;
                    var receiveUser = document.getElementById('input-user').value;
                    var viewUser = document.getElementById('view-user');
                    document.getElementById('button-add-id').className="hidden";
                    if (receiveUser === '') {
                        viewUser.innerText = '请输入用户名'
                    }
                    else if (receiveUser.length < 6 || receiveUser.length > 14) {
                        viewUser.innerText = '用户不存在'
                    }
                    else if (receiveUser === requestUser) {
                        viewUser.innerText = '不要搜索自己'
                    }else {
                        var request = new XMLHttpRequest();
                        var url = "http://localhost/blog3/php/ifFriend.php?requestUser="+requestUser+"&receiveUser="+receiveUser;
                        request.open("GET",url);
                        request.send();
                        request.onreadystatechange = function () {
                            if (request.readyState == 4) {
                                if (request.status == 200 || request.status == 304) {
                                    //console.log(request.responseText);
                                    if (request.responseText === "bucunzai") {
                                        viewUser.innerText = '账号不存在';
                                    }
                                    else if (request.responseText === "buyaochongfuqingqiu") {
                                        viewUser.innerText = '不要重复请求';
                                    }
                                    else if (request.responseText === "nimenyishihaoyou") {
                                        viewUser.innerText = '已经是你的好友'
                                    }
                                    else if (request.responseText === "tayijingfachushengqing") {
                                        viewUser.innerText = '他已发出添加请求'
                                    }
                                    else {
                                        viewUser.innerText = receiveUser;
                                        document.getElementById('button-add-id').className="button-add";
                                    }
                                }
                            }
                        }
                    }
                },
                addFriend: function () {
                    alert('请求已发送');
                    //利用ajax像PHP脚本发添加请求
                    var requestUser = document.getElementById('id-state').innerText;
                    var receiveUser = document.getElementById('input-user').value;
                    var request = new XMLHttpRequest();
                    var url = "http://localhost/blog3/php/insertFriend.php?requestUser="+requestUser+"&receiveUser="+receiveUser;
                    request.open("GET",url);
                    request.send();
                    request.onreadystatechange = function () {
                        if (request.readyState == 4) {
                            if (request.status == 200 || request.status == 304) {
                                //console.log(request.responseText);
                                if (request.responseText === "ok") {
                                    document.getElementById('button-add-id').className="hidden";
                                    var socket = io('http://127.0.0.1:3120');
                                    socket.emit('chat message',["friendAdd",receiveUser]);
                                    socket.on(String(receiveUser), function(msg){
                                    });
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})
