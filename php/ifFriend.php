<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/4/17 0017
 * Time: 16:29
 */
include 'sqlSuperClass.php';
class ifFriendClass extends sqlSuperClass {
    protected $sqlRequestUser = array();
    protected $sqlRequestState = array();
    protected $sqlReceiveUser = array();
    protected $sqlReceiveState = array();

    public function __construct($sql){
    $this->sql = $sql;
}

    public function querySql() {
        parent::querySql(); // TODO: Change the autogenerated stub
        $this->result = $this->getResult();
        if ($this->result->num_rows > 0) {
            while($row = $this->result->fetch_assoc()) {
                array_push($this->sqlRequestUser,$row['request_user']);
                array_push($this->sqlRequestState,$row['request_state']);
                array_push($this->sqlReceiveUser,$row['receive_user']);
                array_push($this->sqlReceiveState,$row['receive_state']);
            }
        }
    }

    public function ifFriend($requestUser,$receiveUser) {
        $length = count($this->sqlRequestUser);
        if ($this->ifUser($receiveUser)) {
            for ($i = 0; $i < $length; $i++) {
                if ($requestUser === $this->sqlRequestUser[$i] and $receiveUser === $this->sqlReceiveUser[$i]) {//查询关系
                    if ($this->sqlRequestState[$i] == 2 and $this->sqlReceiveState[$i] == 1) {
                        echo "buyaochongfuqingqiu";
                        return false;
                    }
                    if ($this->sqlRequestState[$i] == 2 and $this->sqlReceiveState[$i] == 2) {
                        echo "nimenyishihaoyou";
                        return false;
                    }
                }
                if ($requestUser === $this->sqlReceiveUser[$i] and $receiveUser === $this->sqlRequestUser[$i]) {
                    if ($this->sqlRequestState[$i] == 2 and $this->sqlReceiveState[$i] == 1) {
                        echo "tayijingfachushengqing";
                        return false;
                    }
                    if ($this->sqlRequestState[$i] == 2 and $this->sqlReceiveState[$i] == 2) {
                        echo "nimenyishihaoyou";
                        return false;
                    }
                }
            }
            echo "ok";
        }

    }

    public function ifUser($receiveUser) {//此人是否存在
        $this->sql = "select user from user_table";
        $this->result = $this->getResult();
        if ($this->result->num_rows > 0) {
            while($row = $this->result->fetch_assoc()) {
                if ($receiveUser === $row['user']) {
                    return true;
                }
            }
        }
        echo 'bucunzai';
        return false;
    }
}
$a = new ifFriendClass('select *from friend_table');
$a->connectSql();
$a->querySql();
$a->ifFriend($_GET['requestUser'],$_GET['receiveUser']);

?>