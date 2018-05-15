var vue = new Vue ({
    el:"#app",
    data: {

    },
    components: {
        "my-login": {
            template: '' +
            '<div class="wrapper">\n' +
            '    <div class="content">\n' +
            '        <div id="form_wrapper" class="form_wrapper">\n' +
            '            <form id="id-form" class="login active" action="">\n' +
            '                <h3>Login</h3>\n' +
            '                <div>\n' +
            '                    <label>账号</label>\n' +
            '                    <input id="id-user" type="text" name="name-user"/>\n' +
            '                    <span class="error">This is an error</span>\n' +
            '                </div>\n' +
            '                <div>\n' +
            '                    <label>密码</label>\n' +
            '                    <input id="id-pass" type="password" name="name-pass"/>\n' +
            '                    <label id="id-label-1" style="color: #b92c28">\n' +
            '                    </label>\n' +
            '                    <span class="error">This is an error</span>\n' +
            '                </div>\n' +
            '                <div class="bottom">\n' +
            '                    <div class="remember2">\n' +
            '                        <button  id="id-btn-value" @click="valueAjax()" :class="buttonClass" type="button">提交</button>\n' +
            '                    </div>\n' +
            '                    <div class="remember">\n' +
            '                        <button id="id-btn-back-index" @click="backIndex()" :class="buttonClass" type="button">返回主页面</button>\n' +
            '                    </div>\n' +
            '                    <a :href="registerHref" rel="register" class="linkform">你还没有账号？点我注册</a>\n' +
            '                </div>\n' +
            '            </form>\n' +
            '        </div>\n' +
            '    </div>\n' +
            '</div>',
            data: function () {
                return {
                    buttonClass:"btn btn-info",
                    registerHref: "register.html",
                }
            },
            methods: {
                valueAjax :function () {
                    var user = $('#id-user').val();
                    var pass = $('#id-pass').val();
                    if (user == '' || pass == '') {
                        alert('请输入完整信息');
                    }
                    else {
                        var request = new XMLHttpRequest();
                        var url = "http://localhost/blog3/php/ifLongin.php?" + "name-user=" + user +"&" + "name-pass="  + pass;
                        request.open("GET",url);
                        request.send();
                        request.onreadystatechange = function () {
                            if (request.readyState == 4) {
                                if (request.status == 200 || request.status == 304) {
                                    if (request.responseText =="ok123456") {
                                        window.location.href = "index.php";
                                    }
                                    else if (request.responseText == "back_Backstage") {
                                        window.location.href = "indexBackStage.php";
                                    } else {
                                        document.getElementById('id-label-1').innerText = request.responseText;
                                        $('#id-label-1').show();
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

