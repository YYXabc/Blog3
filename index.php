<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Blog</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/index.css">
    <script src="js/jquery-3.2.1.js" type="text/javascript"></script>
    <script src="js/bootstrap.min.js" type="text/javascript"></script>
    <script src="vue.min.js"></script>
    <script src="js/returnXml.js"></script>
</head>
<body>
<div id="app">
    <my-navigation-bar></my-navigation-bar>
    <my-article-and-image>
        <my-article-index slot="article"></my-article-index>
        <my-image-index slot="image"></my-image-index>
    </my-article-and-image><br><br><br>
    <my-book-and-video></my-book-and-video>
    <my-index-comment></my-index-comment><br><br><br><br>
    <my-footer></my-footer>
</div>

<script src="js/vueNavigationBar.js"></script>
<script src="js/vueArticleImage.js"></script>
<script src="js/vueBookVideo.js"></script>
<script src="js/smzb_images.js"></script>
</body>
</html>
<?php include "php/ifLoginState.php" ; $a = new ifLoginState(); $a->LoginState(); $a->getSeesion();?>