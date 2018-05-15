<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/4/5 0005
 * Time: 23:51
 */
include "sqlSuperClass.php";
$a = new sqlSuperClass();
$a->connectSql();
$a->deleteSql('blog_table',$_GET['id']);
echo ("ok");

?>