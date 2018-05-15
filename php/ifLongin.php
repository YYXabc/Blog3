<?php
session_start();
//判断登录
include "sqlSuperClass.php";
class ifLonginClass extends sqlSuperClass {
    protected $userArray = array();
    protected $passArray = array();
    public function __construct($sql) {
        $this->sql = $sql;
    }

    public function querySql() {
        parent::querySql(); // TODO: Change the autogenerated stub
        $this->result = $this->getResult();
        if ($this->result->num_rows > 0) {
            while($row = $this->result->fetch_assoc()) {
                array_push($this->userArray,$row['user']);
                array_push($this->passArray,$row['pass']);
            }
        }
    }

    public function getUserArrary () {
        return $this->userArray;
    }

    public function getPassArray () {
        return $this->passArray;
    }

    public function returnResponse ($user,$pass,$useArray,$passArray) {
        if ($user == 'admin' && $pass == '404115964') {
            $_SESSION['backState'] = true;
            echo "back_Backstage";
        }else {
            $user_state = false;
            for ($i = 0; $i < count($useArray); $i++) {
                if ($user == $useArray[$i]) {
                    if ($pass == $passArray[$i]) {
                        $user_state = true;
                        break;
                    }
                }
            }
            if ($user_state) {
                $_SESSION['userSession'] = $user;
                echo "ok123456";
            }else {
                echo"账户或者密码错误";
            }
        }
    }
}
$a = new ifLonginClass("select *from user_table");
$a->connectSql();
$a->querySql();
$a->returnResponse($_GET['name-user'],$_GET['name-pass'],$a->getUserArrary(),$a->getPassArray());
?>