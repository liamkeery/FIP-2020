<?php

require '../load.php';

if (isset($_GET['allusers'])) {
    $users = getAllUsers();
    echo $users;
}
?>
