var vue = new Vue ({
    el:"#app",
    data: {

    },
    components: {
        "my-register": {
            template:'' +
            '<div class="wrapper">\n' +
            '    <div class="content">\n' +
            '        <div id="form_wrapper" class="form_wrapper">\n' +
            '            <form id="id-form" class="login active" action="">\n' +
            '                <h3>Register</h3>\n' +
            '                <div>\n' +
            '                    <label>账号</label>\n' +
            '                    <input id="id-user" type="text"  placeholder="输入6-14位" name="name-user"/>\n' +
            '                    <span class="error">This is an error</span>\n' +
            '                    <!--<span>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspThis is an error</span>-->\n' +
            '                </div>\n' +
            '                <div>\n' +
            '                    <label>密码</label>\n' +
            '                    <input id="id-pass1" type="password" placeholder="输入6-14位" name="name-pass"/>\n' +
            '                    <span class="error">This is an error</span>\n' +
            '                </div>\n' +
            '                <div>\n' +
            '                    <label>再次输入密码</label>\n' +
            '                    <input id="id-pass2" type="password" />\n' +
            '                    <span class="error">This is an error</span>\n' +
            '                </div>\n' +
            '                <div class="bottom">\n' +
            '                    <div class="text-center">\n' +
            '                        <div class="remember2">\n' +
            '                            <button @click="valueAjax()" class="btn btn-info" type="button" style="\tfloat:right;margin:2px 5px 0px 0px;">提交</button>\n' +
            '                        </div>\n' +
            '                        <div class="remember">\n' +
            '                            <button @click="backIndex()" class="btn btn-info" type="button">返回主页面</button>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                    <a :href="loginHref" rel="register" class="linkform">已经有账号？点我登录</a>\n' +
            '                </div>\n' +
            '            </form>\n' +
            '        </div>\n' +
            '    </div>\n' +
            '</div>',
            data: function () {
                return {
                    loginHref:'login.php'
                }
            },
            methods: {
                valueAjax: function () {
                    var user = $('#id-user').val();
                    var pass1 = $('#id-pass1').val();
                    var pass2 = $('#id-pass2').val();

                    if (user == '' || pass1== '' || pass2 =='') {
                        alert('请输入完整信息');
                    }
                    else if (user.length < 6 ) {
                        alert('请输入六位数或以上的用户名');
                    }
                    else if (user.length >14) {
                        alert('请输入十四位数或以下的用户名');
                    }
                    else if (pass1.length < 6) {
                        alert('请输入六位数或以上的密码');
                    }
                    else if (pass1.length > 14) {
                        alert('请输入十四位数或以下的密码');
                    }
                    else if (pass1 != pass2) {
                        alert('两次密码输入不相同');
                    } else {
                        var request = new XMLHttpRequest();
                        var url = "http://localhost/blog3/php/ifRegister.php?name-user=" + user +"&" + "name-pass="  + pass1;
                        request.open("GET",url);
                        request.send();
                        request.onreadystatechange = function () {
                            if (request.readyState == 4) {
                                if (request.status == 200 || request.status == 304) {
                                    console.log(request.responseText);
                                    if (request.responseText == "cunzai") {
                                        alert("该用户名已被注册");
                                    }else if (request.responseText =="insert_ok") {
                                        alert("注册成功 3秒后自动跳转");
                                        setTimeout("window.location.href='index.php'",3000);
                                    }
                                }
                            }
                        }
                    }
                },
                backIndex: function () {
                    window.location.href = "index.php";
                }
            }
        }
    }
})