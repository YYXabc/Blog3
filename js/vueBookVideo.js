var vue = new Vue ({
    el: "#app",
    data: {},
    components: {
        "my-book-and-video": {
            template:'' +
            '<div class="container">\n' +
            '        <div class="col-lg-6 col-sm-12 col-md-12 col-xs-12">\n' +
            '            <div id="id_book" class="panel panel-default">\n' +
            '                <div id="panel_background"class="panel-body">\n' +
            '                    <h2 class="text-center">经典书籍</h2>\n' +
            '                    <ul v-for="(name,index) in bookName">\n' +
            '                        <li class="vertical"><span :class="bookClass">&nbsp;</span><a :href="bookUrl[index]" target="_blank">{{name}}</a></li>\n' +
            '                    </ul>\n' +
            '                </div>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '        <div class="col-lg-6 col-sm-12 col-md-12 col-xs-12">\n' +
            '            <video controls>\n' +
            '                <source :src="videoSrc" type="video/mp4" >\n' +
            '            </video>\n' +
            '        </div>\n' +
            '</div>',
            data: function () {
                return {
                    bookClass: "glyphicon glyphicon-book",
                    bookName: returnXML.getXMlElementName("xml/blogBookXml.xml",'bookPro','name'),
                    bookUrl: returnXML.getXMlElementName("xml/blogBookXml.xml",'bookPro','url'),
                    videoSrc: "img/BGM.mp4"
                }
            }
        },
        "my-index-comment": {
            template:'' +
            '<div class="container">' +
            '   <h2 class="text-center">评论区</h2>' +
            '   <div v-for="(user,index) in commentUser" class="col-lg-12 col-sm-12 col-md-12 col-xs-12">' +
            '       <div class="panel-heading"style="background-color: #FFCC66;font-size:120%">\n' +
            '           <span>{{commentDate[index]}}&nbsp;&nbsp;</span><span>{{user}}说:</span><span>{{commentText[index]}}</span>' +
            '       </div>' +
            '   </div>' +
            '   <h3 class="text-center" ><a :href="moreComment">更多评论</a></h3>' +
            '</div>',
            data: function () {
                return {
                    moreComment:"indexMoreComment.php",
                    commentUser:indexElement.indexCommentUser,
                    commentText:indexElement.indexCommentText,
                    commentDate:indexElement.indexCommentDate
                }
            }
        },
        "my-comment": {
            template:'' +
            '<div class="container" >\n' +
            '    <div id="id-div-1" class="col-lg-9">\n' +
            '        <h1 style="font-size: 40px" :class="center">所有评论</h1>\n' +
            '        <table id="id-table" class="table table-hover">\n' +
            '            <thead>\n' +
            '            <tr>\n' +
            '                <th>Date</th>' +
            '                <th>User</th>\n' +
            '                <th>Text</th>\n' +
            '            </tr>\n' +
            '            </thead>\n' +
            '            <tbody v-for="(use,index) in user">' +
            '               <tr><td>{{date[index]}}</td><td>{{use}}</td><td>{{text[index]}}</td></tr>' +
            '            </tbody>'+
            '        </table>\n' +
            '    </div>\n' +
            '    <div class="col-lg-3">\n' +
            '        <h1 style="font-size: 40px" :class="center">给我留言</h1>\n' +
            '        <form action="php/insertComment.php" class="text-center">\n' +
            '            <p><textarea id="comment-text" name="text" rows="10" cols="50" :placeholder="prompt"></textarea></p>\n' +
            '            <div :class="center">\n' +
            '                <button id="id-button" class="btn btn-primary">提交</button>\n' +
            '            </div>\n' +
            '        </form>\n' +
            '    </div>\n' +
            '</div>',
            data: function () {
                return {
                    prompt:"请不要输入英文键盘的单引号...",
                    center:"text-center",
                    date: returnXML.getXMlElementName("xml/blogCommentXml.xml","commentPro","date"),
                    user: returnXML.getXMlElementName("xml/blogCommentXml.xml","commentPro","user"),
                    text: returnXML.getXMlElementName("xml/blogCommentXml.xml","commentPro","text"),
                }
            }
        },
        "my-footer": {
            template: '' +
            '<footer>\n' +
            '    <div class="container">\n' +
            '        <div class="row">\n' +
            '            <div class="col-sm-5" style="float: right">\n' +
            '                <ul class="list-inline">\n' +
            '                    <li><h6>Copyright &copy;_禽_兽_</h6></li>\n' +
            '                    <li><h6>Follow me :</h6></li>\n' +
            '                    <li><span :class="footerClass"><a :href="weiBoHref"> 微博</a></span></li>\n' +
            '                    <li><span :class="footerClass"><a :href="zhiHuHref"> 知乎</a></span></li>\n' +
            '                    <li><span :class="footerClass"><a :href="douBanHref"> 豆瓣</a></span></li>\n' +
            '                </ul>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '    </div>\n' +
            '</footer>',
            data: function () {
                return {
                    footerClass: "glyphicon glyphicon-envelope",
                    weiBoHref: "http://weibo.com/u/3995553508",
                    zhiHuHref: "https://www.zhihu.com/people/kuang-zhuai-ku-ba-diao-zha-tian/activities",
                    douBanHref: "",
                }
            }
        }
    }

})