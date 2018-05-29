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
    <script src='https://cdn.bootcss.com/socket.io/2.0.3/socket.io.js'></script>
    <script src="js/jquery-3.2.1.js" type="text/javascript"></script>
    <script src="js/bootstrap.min.js" type="text/javascript"></script>
    <script src="vue.min.js"></script>
    <script src="js/returnXml.js"></script>
    <style>
        body {
            margin: 0;
            padding: 0;
            background: #FFFFCC;
        }
        #id-ul .navbar-li-span  {
            padding-left: 10px;
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
            width: 300px;
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
        #friend-message {
            width: 200px;
            height: 50px;
            margin: 20PX auto;
            background: #ECEFF4;
            padding: 5px 0;
            box-shadow: 0 5px 10px #888888;
            border-radius: 3px;
        }
        #friend-message button {
            margin-left: 15px;
            height: 40px;
            width: 50px;
            background: #c0a16b;
            border-radius: 3px;
        }
        #friend-message span {
            font-size: 200%;
        }
        #chat-box {
            width: 480px;
            height: 400px;
            margin: 30px auto;
            background: #9d9d9d;
            border-radius: 15px;
            box-shadow: 1px 10px 50px #888888;
        }
        #chat-box #chat-box-friend-list {
            width: 181px;
            height: 400px;
            background: #ffffff;
            float: left;
            overflow-y: auto;
            border-bottom-left-radius: 10px;
            border-top-left-radius: 10px;
            border-right: 1px solid;
        }
        #chat-box #chat-box-friend-list li {
            list-style: none;
            width: 180px;
            padding:10px;
            font-size: 150%;
        }
        #chat-box #chat-box-friend-list li:hover {
            background: #f2f2f5;
            cursor: pointer;
        }
        #chat-box #chat-box-message {
            padding: 0;
            margin: 0;
            width: 299px;
            height: 400px;
            background: #f2f2f5;
            float: left;
            border-bottom-right-radius: 10px;
            border-top-right-radius: 10px;
        }
        #chat-box #chat-box-message #friend-message-head {
            width: 299px;
            height: 50px;
            padding: 10px;
            font-size: 150%;
            background: #ffffff;
            border-bottom: 1px solid;
            margin: 0;
        }

        #chat-box #chat-box-message #message-dialog-box {
            width: 299px;
            height: 300px;
            border-bottom: 1px solid ;
            overflow-y:auto;
        }
        #chat-box #chat-box-message #message-dialog-box .friend-send-message {
            background: #FFFFFF;
            float: left;
            clear: both;
            font-size: 130%;
            padding: 5px 15px;
            margin-top: 10px;
            margin-left: 5px;
            border-radius: 10px;
            max-width: 250px;
            max-height: 500px;
            word-break:break-all;
        }
        #chat-box #chat-box-message #message-dialog-box .myself-send-message {
            background: #a6d94e;
            float: right;
            clear: both;
            font-size: 130%;
            padding: 5px 15px;
            margin-top: 10px;
            margin-right: 5px;
            border-radius: 10px;
            max-width: 250px;
            max-height: 500px;
            word-break:break-all;
        }
        #chat-box #chat-box-message #message-send-out {
            width: 299px;
            height: 50px;
            background: #ffffff;
        }
        #chat-box #chat-box-message #message-send-out textarea {
            resize:none;
            height: 40px;
            width: 200px;
            margin: 5px 5px 0 20px;

        }
        #chat-box #chat-box-message #message-send-out button {
            height: 40px;
            font-size: 120%;
            float: right;
            margin-top: 5px;
            margin-right: 15px;
        }
        #search-user {
            width: 206px;
            margin: 0 auto;
        }
        #friend-add {
            width: 320px;
            margin: 0 auto;
            //padding-left: 166px;
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
    </my-search-and-friend-list><br><br><br><br>
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

