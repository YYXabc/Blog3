<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/3/22 0022
 * Time: 2:15
 */
//数据库超类
class sqlSuperClass {
    protected $servername = "localhost";
    protected $username = "root";
    protected $password = "";
    protected $dbname = "article";
    protected $conn;
    protected $sql;
    protected $result;


    // 创建连接
    public function connectSql () {
        $this->conn = new mysqli($this->servername, $this->username, $this->password, $this->dbname);
        if ($this->conn->connect_error) {
            die("连接失败: " . $this->conn->connect_error);
        }
    }

    public function getSql () {
        return $this->sql;
    }

    public function setSql ($sql) {
        $this->sql = $sql;
    }

    public function getConn(){
        return $this->conn;
    }

    public function getResult(){
        return $this->result = $this->conn->query($this->sql);
    }

    /*
     * 插入方法
     * 表名Array
     * 元素名字Array
     * 数据 //如果有timestamp不用传入
     * 是否需要插入CURRENT_TIMESTAMP
     * */
    public function insertSql($tableName,$element,$data,$ifInsertDate){
        $str ='insert into '.$tableName.'(';
        for ($i = 0; $i < count($element); $i++) {
            $str = $str.$element[$i].',';
        }
        $str = substr($str,0,strlen($str)-1);
        $str = $str.") values(";
        for ($i = 0; $i < count($data); $i++) {
            $str = $str."'";
            $str = $str.$data[$i]."',";
        }
        if ($ifInsertDate) {
            $str = $str."CURRENT_TIMESTAMP";
        }else {
            $str = substr($str,0,strlen($str)-1);
        }
        $str = $str.")";
        $this->sql = $str;
        $this->conn->query($this->sql);
    }

    //查询方法-子类重写
    public function querySql() {

    }
    /*更改FriendSql状态
     * $tableName 表名
     * $element　元素名例如['request_state','receive_state']
     * $state 状态　1 or 2 or 3
     * $user 元素名例如['request_user','receive_user']
     */
    function updateFriendSql($tableName,$element,$state,$user,$data) {
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
        $this->sql = $str;
        $this->conn->query($this->sql);
    }
    //删除方法
    function deleteSql() {
    }

    //跳转到query类型文件
    public function jumpPHP($fileName) {
        echo "<script>window.location.href = '{$fileName}'+'?'+Math.random()</script>";
    }
    //跳转到主页
    public function jumpIndex () {
        echo "<script>window.location.href = 'http://localhost/blog3/'</script>";
    }

}

?>