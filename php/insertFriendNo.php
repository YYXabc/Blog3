<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/5/8 0008
 * Time: 22:20
 */
include "sqlSuperClass.php";
$a = new sqlSuperClass();
$a->connectSql();
$request_user = $_GET['requestUser'];
$receive_user = $_GET['receiveUser'];
$a->updateFriendSql("friend_table",['request_state','receive_state'],[2,3],['request_user','receive_user'],[$receive_user,$request_user]);
?>