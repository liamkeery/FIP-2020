<?php

require_once '../load.php';

if(isset($_POST['submit'])){
    $fname = trim($_POST['fname']);
    $username = trim($_POST['username']);
    $password = trim($_POST['password']);
    $email = trim($_POST['email']);

    if (empty($email) || empty($password) || empty($username) || empty($fname)){
        $message = 'Please fill out the required fields.';
    }else{
        $message = createUser($fname, $username, $password, $email);
    }
}

?>