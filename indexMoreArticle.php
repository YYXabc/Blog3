<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>更多文章</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <script src="js/jquery-3.2.1.js" type="text/javascript"></script>
    <script src="js/bootstrap.min.js" type="text/javascript"></script>
    <script src="vue.min.js"></script>
    <script src="js/returnXml.js"></script>
    <style>
        body {
            background: #FFFFCC;
        }
        h1 {
            font-size:350%;
        }
        .li-title a {
            font-size: 120%;
            color: #000000;
            text-decoration:underline;
        }
        .li-title a:hover {
            font-size: 130%;
            color: #2aabd2;
        }
    </style>
</head>
<body>
<div id="app">
    <my-navigation-bar></my-navigation-bar><br><br><br>
    <my-article></my-article>
</div>
<script src="js/vueNavigationbar.js"></script>
<script src="js/vueArticleImage.js"></script>
</body>
</html>
<?php include "php/ifLoginState.php" ; $a = new ifLoginState(); $a->LoginState();?>