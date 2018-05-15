<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/3/28 0028
 * Time: 19:30
 */
session_start();
session_destroy();
echo "<script>window.location.href = \"index.php\"</script>"
?>