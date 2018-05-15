var vue = new Vue ({
    el:"#app",
    data: {

    },
    components: {
        "dele-article": {
            template:'' +
            '<div class="col-lg-6 col-sm-12 col-md-12 col-xs-12">\n' +
            '   <h2>文章删除</h2>\n' +
            '   <div class="manage-div">\n' +
            '       <div :class="classA" v-for="(title , index) in titles" :title="id[index]">\n' +
            '           <div :class="classB">{{title}}</div>\n' +
            '           <div :class="classC">\n' +
            '               <button type="button" :class="classD" @click="valueAjax(id[index])" :title="id[index]">删除</button>\n' +
            '           </div>\n' +
            '       </div>\n' +
            '   </div>\n' +
            '</div>',
            data: function () {
                return {
                    classA: 'panel panel-default',
                    classB: 'panel-heading',
                    classC: 'panel-body',
                    classD: 'btn btn-primary',
                    titles: returnXML.getXMlElementName("xml/blogTitleXml.xml","titlePro","title"),
                    id: returnXML.getXMlElementName("xml/blogTitleXml.xml","titlePro","id")
                }
            },
            methods: {
                valueAjax: function (id) {
                    var fatherDiv =$(".manage-div")[0]
                    var deleteDiv = fatherDiv.getElementsByClassName("panel panel-default")
                    for (var i = 0; i < deleteDiv.length; i++) {
                        if (id === deleteDiv[i].title) {
                            deleteDiv[i].remove();
                        }
                    }

                    //Ajax传递ID到PHP并删除
                    var request = new XMLHttpRequest();
                    var url = "http://localhost/blog3/php/deleteArticle.php?id=" + id;
                    request.open("GET",url);
                    request.send();
                    request.onreadystatechange = function () {
                        if (request.readyState === 4) {
                            if (request.status === 200 || request.status === 304) {
                                if (request.responseText === 'ok') {
                                    window.location.href = "http://localhost/blog3/php/queryArticle.php";
                                }
                            }
                        }
                    }
                }
            }
        },
        "add-article": {
            template:'' +
            '<div class="col-lg-6 col-sm-12 col-md-12 col-xs-12">' +
            '   <h2>文章添加</h2>' +
            '   <div class="manage-div">' +
            '   <form action="php/insertArticle.php">' +
            '   <div class="form-group">\n' +
            '       <label style="font-size: 150%">名称</label>\n' +
            '       <input type="text" class="form-control" placeholder="请输入title" name="title-name">\n' +
            '   </div>\n' +
            '   <div class="form-group">\n' +
            '       <label style="font-size: 150%">URL</label>\n' +
            '       <input type="text" class="form-control" placeholder="请输入网址 https://xxxxx" name="url-name">\n' +
            '   </div>\n' +
            '   <div class="text-center">\n' +
            '       <button class="btn btn-primary" type="submit">提交</button>\n' +
            '   </div>' +
            '   </form>' +
            '   </div>' +
            '</div>'
        },
        "delete-comment": {
            template: '' +
            '<div class="col-lg-6 col-sm-12 col-md-12 col-xs-12">\n' +
            '   <h2>评论删除</h2>\n' +
            '   <div class="manage-div">\n' +
            '       <div :class="classA" v-for="(user,index) in users" :title="id[index]">\n' +
            '           <div :class="classB">User:{{user}}&nbsp&nbsp&nbsp&nbspDate:{{date[index]}}</div>\n' +
            '           <div :class="classC">\n' +
            '               <span>Text:{{texts[index]}}</span><button type="button" :class="classD" @click="valueAjax(id[index])" :title="id[index]">删除</button>\n' +
            '           </div>\n' +
            '       </div>\n' +
            '   </div>\n' +
            '</div>',
            data: function () {
                return {
                    classA: 'panel panel-default',
                    classB: 'panel-heading',
                    classC: 'panel-body',
                    classD: 'btn btn-primary',
                    users: returnXML.getXMlElementName("xml/blogCommentXml.xml","commentPro","user"),
                    texts: returnXML.getXMlElementName("xml/blogCommentXml.xml","commentPro","text"),
                    id: returnXML.getXMlElementName("xml/blogCommentXml.xml","commentPro","id"),
                    date: returnXML.getXMlElementName("xml/blogCommentXml.xml","commentPro","date"),
                }
            },
            methods: {
                valueAjax: function (id) {
                    var fatherDiv = $(".manage-div")[2]
                    var deleteDiv = fatherDiv.getElementsByClassName("panel panel-default")
                    for (var i = 0; i < deleteDiv.length; i++) {
                        if (id === deleteDiv[i].title) {
                            deleteDiv[i].remove();
                        }
                    }

                    //Ajax传递ID到PHP并删除
                    var request = new XMLHttpRequest();
                    var url = "http://localhost/blog3/php/deleteComment.php?id=" + id;
                    request.open("GET",url);
                    request.send();
                    request.onreadystatechange = function () {
                        if (request.readyState === 4) {
                            if (request.status === 200 || request.status === 304) {
                                if (request.responseText === 'ok') {
                                    window.location.href = "http://localhost/blog3/php/queryComment.php";
                                }
                            }
                        }
                    }
                }
            }
        },
        'add-photo': {
            template: '' +
            '        <div class="col-lg-6 col-sm-12 col-md-12添加照片col-xs-12">\n' +
            '            <h2>添加照片</h2>\n' +
            '            <div class="manage-div">\n' +
            '                <p class="prompt-photo">把照片复制到IMG目录下一次点击两个按钮</p>\n' +
            '                <div class="prompt-photo-div">\n' +
            '                    <a href="php/insertPhotoUrl.php" target="_blank" class="btn btn-primary" style="display:block">插入IMG</a>\n' +
            '                    <a href="php/queryPhotoUrl.php" target="_blank" class="btn btn-primary" style="display:block">写入IMG</a>\n' +
            '                </div>\n' +
            '            </div>\n' +
            '        </div>'
        }
    }
})