<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/4/5 0005
 * Time: 19:51
 */
include "sqlSuperClass.php";
$a = new sqlSuperClass();
$a->connectSql();
$a->insertSql('blog_table',['title','url'],[$_GET['title-name'],$_GET['url-name']],false);
$a->jumpPHP('queryArticle.php')
?>