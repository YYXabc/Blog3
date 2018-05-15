var vue = new Vue ({
    el: "#app",
    data: {

    },
    components: {
        'my-search-and-friend-list': {
            template: '' +
            '<div class="container">' +
            '   <h1 class="text-center">个人中心</h1>\n' +
            '   <div class="col-lg-6 col-sm-6 col-md-12 col-xs-12" >\n' +
            '       <h2 >用户搜索</h2>\n' +
            '       <div id="search-user">\n' +
            '           <input id="input-user" type="text">\n' +
            '           <p id="button_search" class="glyphicon glyphicon-search" @click="search"></p><br>\n' +
            '           <div id="view-user"></div>\n' +
            '           <button class="hidden" id="button-add-id" @click="addFriend">添加</button>' +
            '       </div>\n' +
            '       <slot name="message-box">\n' +
            '       </slot>' +
            '   </div>' +
            '   <div class="col-lg-6 col-sm-6 col-md-12 col-xs-12">\n' +
            '       <h2 class="text-center">好友列表</h2>\n' +
            '       <div id="friend-list">\n'+
            '       </div>\n' +
            '   </div>' +
            '</div>',
            data: function () {

            },
            methods: {
                del: function () {
                    alert("sss");
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
