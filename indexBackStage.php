<?php
session_start();
if ($_SESSION['backState'] == null) {
    echo "<script>window.location.href = 'index.php'</script>";
}else {

}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <script src="js/jquery-3.2.1.js" type="text/javascript"></script>
    <script src="js/bootstrap.min.js" type="text/javascript"></script>
    <script src="vue.min.js"></script>
    <script src="js/returnXml.js"></script>
    <style>
        body {
            background: #FFFFcc;
        }

        h1 {
            font-size: 500%;
            color: #b92c28;
        }

        .manage-div {
            border: 2px solid #FFCC00;
            width: 500px;height: 380px;
            overflow-x:auto;
            border-radius: 15px;
        }

        .manage-div::-webkit-scrollbar {

            background: #999999;
            border-top-right-radius: 15px;
            border-bottom-right-radius: 15px;
        }
        .manage-div::-webkit-scrollbar-thumb{
            border-top-right-radius: 15px;
            border-bottom-right-radius: 15px;
            -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
            background: rgba(0,0,0,0.2);
        }

        .prompt-photo {
            width: 496px;
            border-top-right-radius:12px;
            border-top-left-radius: 12px;
            height: 80px;
            background: #E6E6FA;
            text-align: center;
            padding: 25px;

        }

        .prompt-photo-div a {
            width: 80px;
            margin: 10px auto;
            border: 1px solid #000000;
        }
    </style>
</head>
<body>
<div id="app">
    <div class="container">
        <h1 class="text-center">后台管理</h1>
        <dele-article></dele-article>
        <add-article></add-article>
        <delete-comment></delete-comment>
        <add-photo></add-photo>
    </div>
</div>
<script src="js/vueBackStage.js"></script>
</body>
</html>