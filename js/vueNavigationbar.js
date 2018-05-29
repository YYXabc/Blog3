var vue = new Vue ({
    el: "#app",
    data: {

    },
    components:{
        'my-navigation-bar': {//导航栏
            template: '' +
            '<div class="navbar navbar-fixed-top navbar-inverse">\n' +
            '    <div class="container">\n' +
            '        <div class="navbar-header">\n' +
            '            <button type="button" name="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">\n' +
            '                <span class="sr-only">Toggle navigation</span>\n' +
            '                <span class="icon-bar"></span>\n' +
            '                <span class="icon-bar"></span>\n' +
            '                <span class="icon-bar"></span>\n' +
            '            </button>\n' +
            '        </div>\n' +
            '        <div class="collapse navbar-collapse">\n' +
            '            <ul class="nav navbar-nav" id="id-ul">\n' +
            '                <li>' +
            '                    <a class="navbar-brand" :href="href.blogHref">多媒体博客</a>\n' +
            '                </li>\n' +
            '                <li >\n' +
            '                    <a target="_blank" :href="href.githubHref">\n' +
            '                        <span class="glyphicon glyphicon-home"></span><span class="navbar-li-span">GitHub</span>' +
            '                    </a>\n' +
            '                </li>\n' +
            '                <li >\n' +
            '                    <a target="_blank" :href="href.messageHref">\n' +
            '                        <span class="glyphicon glyphicon-qrcode"></span><span class="navbar-li-span">>点击这里给我发消息</span>' +
            '                    </a>\n' +
            '                </li>\n' +
            '                <li >\n' +
            '                    <a target="_blank" :href="href.musicHref">\n' +
            '                        <span class="glyphicon glyphicon-headphones"></span><span  class="navbar-li-span">我的歌单</span>' +
            '                    </a>\n' +
            '                </li>\n' +
            '                <li >\n' +
            '                    <a target="" :href="href.loginHref" id="id-state">\n' +
            '                        <span class="glyphicon glyphicon-user" ></span><span class="navbar-li-span" id="id-span">登录注册</span>' +
            '                    </a>\n' +
            '                </li>\n' +
            '            </ul>\n' +
            '        </div>\n' +
            '    </div>\n' +
            '</div>',
            data: function () {
                return {
                    href: {
                        blogHref: 'http://localhost/blog3',
                        githubHref: 'https://github.com/YYXabc?tab=repositories',
                        messageHref: 'http://wpa.qq.com/msgrd?v=3&uin=404115964&site=qq&menu=yes',
                        musicHref: 'http://music.163.com/#/m/playlist?id=113810547&userid=96573719',
                        loginHref: 'login.php',
                    },
                }
            }
        },
    }
})
