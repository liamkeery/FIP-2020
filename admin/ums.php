<?php
    include('connect.php');

    function getAllUsers($conn) {
        $query = 'SELECT * FROM users';

        $getAllUsers = $conn->prepare($query);
        $getAllUsers->execute();

        $users = $getAllUsers->fetchAll(PDO::FETCH_ASSOC);

        return $users;
    }
    //TODO => add the insert query and parse thru the post array for entries
    // to build out the values and params
    
    function addUser($conn) {
        // var_dump($_POST);

        $newUserQuery = $conn->prepare("INSERT INTO tbl_user (user_fname, user_name, user_pass, user_email, user_ip) VALUES (:fname, :username, :pword, :email, 'no')");

        $newUserResult = $newUserQuery->execute(array(
            ':fname' => $_POST['first_name'],
            ':username' => $_POST['username'],
            ':pword' => $_POST['password'],
            ':email' => $_POST['email']
        ));

        if ($newUserResult) {
            // success
            //echo 'added user';
            return array('result' => $newUserResult);
        } else {
            // failure
            // echo 'could not add user';
            return array('result' => false);
        }

        // TODO => we can just return $newUserResult and handle success or failure on the client side
        // depending on what gets returned as 'result'
    }

    function deleteUser($conn, $userID) {
        $query = "DELETE FROM tbl_user WHERE user_id=:uID";

        $removeUser = $conn->prepare($query);
        $deletedUserResult = $removeUser->execute(array(':uID' => $userID));

        // this will just return a boolean for success or failure - true ($count)
        // or a message if it's false (can't delete)
        if ($deletedUserResult) {
            return array('result' => $deletedUserResult);
        } else {
            return array('result' => false);
        }
    }