<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/3/23 0023
 * Time: 1:44
 */

/* 生成XML文件的方法
 * $xmlFileName == 文件名
 * $xmlElement1 == 根节点
 * $xmlElement2 == 次跟节点
 * $...$attributeArray 包含从数据库获取的数据数组和最小节点的名称数组(最小节点的名称数组请放在最后一个参数)
 * */
function printXmlMethond($xmlFileName,$xmlElement1,$xmlElement2,...$attributeArray) {
    $arrLength = count($attributeArray[0]);
    $arrLength2 = count($attributeArray)-1;
    $xmlElementName = $attributeArray[$arrLength2];
    $x = $arrLength;
    $k = 0;
    $str="";

    $str .= "<{$xmlElement1}>";
    while ($x > 0) {
        $str .= "<{$xmlElement2}>";
        //echo "!titlePro>";
        for ($i = 0; $i < $arrLength2; $i++) {
            $str .= "<{$xmlElementName[$i]}>";
            $str .= "{$attributeArray[$i][$arrLength-1]}";
            $str .= "</{$xmlElementName[$i]}>";
            $k++;
            if ($k%$arrLength2 == 0) {
                $arrLength--;
                $str .= "</{$xmlElement2}>";
            }
        }
        $x--;
    }
    $str .= "</{$xmlElement1}>";
    file_put_contents("../xml/{$xmlFileName}",$str);
}

?>