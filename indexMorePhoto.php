<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/baguettebox.min.css">
    <link rel="stylesheet" href="css/zzsc.css">
    <script src="js/jquery-3.2.1.js" type="text/javascript"></script>
    <script src="js/bootstrap.min.js" type="text/javascript"></script>
    <script src="vue.min.js"></script>
    <script src="js/returnXml.js"></script>
    <script src="js/baguettebox.min.js"></script>
    <style>
        body {
            background: #FFFFCCCC;
        }
        img {
            height: 180px;
            width: 240px;
        }
    </style>
</head>
<body>
<div id="app">
    <my-navigation-bar></my-navigation-bar><br><br><br>
    <my-image></my-image>
</div>
<script src="js/vueNavigationbar.js"></script>
<script src="js/vueArticleImage.js"></script>
<script>
    baguetteBox.run('.baguetteBoxOne', {
        animation: 'fadeIn',
    });
</script>
</body>
</html>
<?php include "php/ifLoginState.php" ; $a = new ifLoginState(); $a->LoginState();?>