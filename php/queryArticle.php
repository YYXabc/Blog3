<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/3/23 0023
 * Time: 0:04
 */

include "sqlSuperClass.php";
include "printXmlMethond.php";
class queryTitleClass extends sqlSuperClass {
    protected $titleArray = array();
    protected $urlArray = array();
    protected $idArray = array();
    protected $xmlElement = array();

    public function __construct($sql,$xmlElement) {
        $this->sql = $sql;
        $this->xmlElement = $xmlElement;
    }
    public function querySql() {
        parent::querySql(); // TODO: Change the autogenerated stub
        $this->result = $this->getResult();
        if ($this->result->num_rows > 0) {
            while($row = $this->result->fetch_assoc()) {
                array_push($this->titleArray,$row[$this->xmlElement[1]]);
                array_push($this->urlArray,$row[$this->xmlElement[2]]);
                array_push($this->idArray,$row[$this->xmlElement[0]]);
            }
        }
    }

    public function getTitleArray() {
        return $this->titleArray;
    }

    public function getUrlArray() {
        return $this->urlArray;
    }

    public function getIdArray() {
        return $this->idArray;
    }

    public function getXmlElement() {
        return $this->xmlElement;
    }
}
$a = new queryTitleClass('select* from blog_Table',array("id","title","url"));
$a->connectSql();
$a->querySql();
printXmlMethond("blogTitleXml.xml","titleSpl","titlePro",$a->getIdArray(),$a->getTitleArray(),$a->getUrlArray(),$a->getXmlElement());
$a->jumpPHP("../indexBackStage.php");
?>