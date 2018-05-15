<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/5/8 0008
 * Time: 22:20
 */
//点击同意添加好友更新数据库
include "sqlSuperClass.php";
$a = new sqlSuperClass();
$a->connectSql();
$request_user = $_GET['requestUser'];
$receive_user = $_GET['receiveUser'];
if ($request_user == null || $receive_user == null) {

}else {
    $a->updateFriendSql("friend_table",['request_state','receive_state'],[2,2],['request_user','receive_user'],[$receive_user,$request_user]);

}

?>