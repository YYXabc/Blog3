<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/4/14 0014
 * Time: 21:55
 */
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>个人中心</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <script src="js/jquery-3.2.1.js" type="text/javascript"></script>
    <script src="js/bootstrap.min.js" type="text/javascript"></script>
    <script src="vue.min.js"></script>
    <script src="js/returnXml.js"></script>
    <script src='https://cdn.bootcss.com/socket.io/2.0.3/socket.io.js'></script>
    <style>
        body {
            margin: 0;
            padding: 0;

            background: #FFFFCC;
        }
        #input-user {
            padding-top: 0;
            float: left;
            width: 180px;
        }
        #button_search {
            padding-top: 3px;
            padding-left: 5px;
            font-size: 130%;
        }
        #view-user {
            width: 120px;
            display: inline-block;
        }

        .button-add {
            padding: 3px 10px;
            margin-left: 6px;
            border-radius: 8px;
            display: inline;
            outline: none;
        }

        #friend-list {
            padding: 20px 0 0 0;
            margin: 0 auto;
            background: #c0a16b;
            width: 400px;
            height: 500px;
            border-radius: 10px;
            overflow-y: auto;

        }
        #friend-list ul {
            padding: 0;
        }
        #friend-list li {
            margin: 0;
            padding: 20px 10px;
            list-style: none;
            border-top: 1px solid white;
            background-color: #c0a16b;
            font-weight: bold;
            font-size: 1.2em;
        }
        #friend-list .friend-user {
            padding-left: 5px;
            width: 160px;
            display: inline-block;
        }
        #friend-list .button-message {
            margin-left: 15px;
            background:#FFFFCC;
        }
        .message-box {
            margin-top: 20px;
            background: #999999;
            width: 320px;
            height: 100px;
            border-radius: 10px;
        }
        .message-box p {
            font-size: 120%;
            width: 160px;
            padding:40px 15px ;
            display: inline-block;
        }
        .message-box button {
            background:#FFFFCC;
            margin-left: 17px;
            padding: 3px 10px;
            display: inline;
            font-weight: 700;
        }

    </style>
</head>
<body>
<div id="app">
    <my-navigation-bar></my-navigation-bar><br><br><br><br><br>
    <my-search-and-friend-list>
        <div id="friend-add" slot="message-box">
        </div>
    </my-search-and-friend-list>
</div >


<script src="js/vueNavigationbar.js"></script>
<script src="js/vuePersibakCenter.js"></script>

</body>
</html>
<?php
    include_once "php/ifLoginState.php" ;
    $a = new ifLoginState();
    if ($a->LoginState()) {} else {echo "<script>window.location.href = 'index.php'</script>";}

;?>
<script src="js/socketIo.js"></script>

