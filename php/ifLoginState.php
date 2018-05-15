<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/3/28 0028
 * Time: 22:46
 */
include "ifSessionState.php";
class ifLoginState {
    public function getSeesion () {
        echo "<script>console.log('{$_SESSION['userSession']}')</script>";
    }

    public function LoginState () {
        if (ifSeesionState()) {
            echo "<script>
                    var changeNav = function() {
                        var id_state = document.getElementById('id-state');
                        id_state.setAttribute('href','personalCenter.php');
                        var id_sapn = document.getElementById('id-span');
                        id_sapn.innerHTML = '{$_SESSION['userSession']}';
                        var id_ul = document.getElementById('id-ul');
                        var li = document.createElement('li');
                        var a = document.createElement('a');
                        var span = document.createElement('span');
                        var text = document.createTextNode(' 退出账号');
                        a.setAttribute('href','deleSession.php');
                        span.setAttribute('class','glyphicon glyphicon-off');
                        span.appendChild(text);
                        a.appendChild(span);
                        li.appendChild(a);
                        id_ul.appendChild(li);
            }
                changeNav();</script>";
            return true;
        }else {
            return false;
        }
    }
    public function ifCommentLoginState () {
        if (ifSeesionState()) {
            echo "<script>
                var showComment = function() {
                    $('#id-button').show();            
                };     showComment();         </script>";
        }else {
            echo "<script>
                var hideComment = function() {
                                    $('#id-button').hide();
                document.getElementById('comment-text').value = '请先登录才能发表留言';
                } 
                hideComment();
</script>";
        }
    }
}

?>