
var indexElement = {
    indexTitle : returnXML.getXMlElementName("xml/blogTitleXml.xml","titlePro","title"),
    indexUrl : returnXML.getXMlElementName("xml/blogTitleXml.xml","titlePro","url"),
    indexImgName : returnXML.getXMlElementName("xml/photoUrlXml.xml","photoPro","photo_name"),
    indexImgUrl :　returnXML.getXMlElementName("xml/photoUrlXml.xml","photoPro","photo_url"),
    indexCommentUser: returnXML.getXMlElementName("xml/blogCommentXml.xml","commentPro","user"),
    indexCommentText: returnXML.getXMlElementName("xml/blogCommentXml.xml","commentPro","text"),
    indexCommentDate: returnXML.getXMlElementName("xml/blogCommentXml.xml","commentPro","date"),
}
indexElement.indexTitle.length = 8;
indexElement.indexUrl.length = 8;
indexElement.indexImgName.length = 4;
indexElement.indexImgUrl.length = 4;
indexElement.indexCommentUser.length = 5;
indexElement.indexCommentText.length = 5;
indexElement.indexCommentDate.length = 5;
var vue = new Vue ({
    el: "#app",
    data: {
        enlargeClass:"ul-li-a-id"
    },
    components:{
        'my-article-and-image': {
            template:'' +
            '<div class="container"><br><br><br>\n' +
            '    <h1 class="text-center">杨宇欣个人Blog</h1>\n' +
            '    <div class="col-lg-6 col-sm-12 col-md-12 \tcol-xs-12">\n' +
            '        <h2>最新文章(全是转载)</h2>\n' +
            '        <slot name="article"></slot>\n'+
            '    </div>\n' +
            '    <div class="col-lg-6 col-sm-12 col-md-12 col-xs-12">\n' +
            '        <h2>专辑封面</h2>\n' +
            '        <slot name="image"></slot>'+
            '        <img id="pla" src="img/img/placeholder.gif" alt="xx" >\n' +
            '    </div>' +
            '</div>'
        },
        'my-article-index': {
            template: '' +
            '<ul class="clearUl">' +
            '   <li v-for="(title,index) in titles" :class="liClass">' +
            '       <a :href="urls[index]">{{title}}</a>' +
            '   </li>' +
            '   <li :class="liEnlarge">' +
            '       <a :href="articlePage">更多文章....</a>' +
            '   </li>' +
            '</ul>',
            data: function () {
                return {
                    articlePage: "indexMoreArticle.php",
                    liClass:　"left_index",
                    liEnlarge:　"ul-li-a-class",
                    titles: indexElement.indexTitle,
                    urls: indexElement.indexUrl
                }
            },
        },
        'my-image-index': {
            template: '' +
            '<ul id="smzb" class="clearUl">' +
            '   <li v-for="(url,index) in imgUrl" :class="liClass">' +
            '       <a :href="url" >{{imgName[index]}}</a>' +
            '   </li>' +
            '   <li class="id-a-1">' +
            '       <a :href="imgPage">更多照片....</a>' +
            '   </li>' +
            '</ul>',

            data: function () {
                return {
                    imgPage:"indexMorePhoto.php",
                    liClass:　"left_index",
                    imgName: indexElement.indexImgName,
                    imgUrl: indexElement.indexImgUrl
                }
            }
        },
        'my-article': {
            template:'' +
            '    <div class = "col-lg-12 col-sm-12">\n' +
            '        <h1 class="text-center">所有文章</h1>\n' +
            '        <ul class="nav nav-pills nav-stacked">' +
            '           <li v-for="(title,index) in titles" class="li-title"><a :href="urls[index]" target="_blank">{{title}}</a></li>' +
            '       </ul>\n' +
            '    </div>',
            data: function () {
                return {
                    titles: returnXML.getXMlElementName("xml/blogTitleXml.xml","titlePro","title"),
                    urls:returnXML.getXMlElementName("xml/blogTitleXml.xml","titlePro","url")
                }
            }
        },
        'my-image': {
            template: '' +
            '<div class="baguetteBoxOne gallery">' +
            '   <span v-for="(url,index) in imgUrl">\n' +
            '       <a :href="url" :title="title[index]"><img :src="url" alt=""></a>' +
            '   </span>'+
            '</div>',
            data: function () {
                return {
                    imgUrl: returnXML.getXMlElementName("xml/photoUrlXml.xml","photoPro","photo_url"),
                    title:  returnXML.getXMlElementName("xml/photoUrlXml.xml","photoPro","photo_name"),
                }
            }
        }
    }
})
//v-for="x in urls"