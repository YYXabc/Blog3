<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/3/23 0023
 * Time: 21:40
 */
function test($tableName,$element,$state,$user,$data) {
    $str = "UPDATE {$tableName} set ";
    for ($i = 0; $i < count($element); $i++) {
        $str = $str."{$element[$i]} = ".$state[$i].",";
    }
    $str = substr($str,0,strlen($str)-1);
    $str = $str." WHERE ";
    for ($i = 0; $i < count($user); $i++) {
        $str = $str."{$user[$i]} = '".$data[$i]."' AND ";
    }
    $str = substr($str,0,strlen($str)-4);
    return $str;
}

echo test("friend_table",['request_state','receive_state'],[1,1],['request_user','receive_user'],['123b','123a']);