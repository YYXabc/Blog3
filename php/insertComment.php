<?php
session_start();
include "sqlSuperClass.php";
$a = new sqlSuperClass();
$a->connectSql();
$a->insertSql('comment',['user','text','date'],[$_SESSION['userSession'],$_GET['text']],true);
$a->jumpPHP('queryComment.php');

?>