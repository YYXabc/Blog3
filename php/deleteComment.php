<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/4/6 0006
 * Time: 23:49
 */
include "sqlSuperClass.php";
//$a = new deleteCommentClass($_GET['id']);
$a  = new sqlSuperClass();
$a->connectSql();
$a->deleteSql('comment',$_GET['id']);
echo ("ok");
?>