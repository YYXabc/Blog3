<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>更多文章</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/index.css">
    <script src="js/jquery-3.2.1.js" type="text/javascript"></script>
    <script src="js/bootstrap.min.js" type="text/javascript"></script>
    <script src="vue.min.js"></script>
    <script src="js/returnXml.js"></script>
    <style>
        body {
            background: #FFFFCC;
        }
    </style>
</head>
<body>
<div id="app">
    <my-navigation-bar></my-navigation-bar><br><br><br>
    <my-comment></my-comment>
</div>
<script src="js/vueNavigationbar.js"></script>
<script src="js/vueBookVideo.js"></script>
</body>
</html>
<?php include "php/ifLoginState.php" ; $a = new ifLoginState(); $a->LoginState(); $a->ifCommentLoginState()?>