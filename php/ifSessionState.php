<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/3/28 0028
 * Time: 19:23
 */
function ifSeesionState () {
    if ($_SESSION['userSession'] == null) {
        return false;
    }
    return true;
}

?>