<?php

function createUser($fname, $username, $password, $email){
    $pdo = Database::getInstance()->getConnection();

    $create_user_query = 'INSERT INTO tbl_user(user_fname, user_name, user_pass, user_email, user_ip)';
    $create_user_query .= ' VALUES(:fname, :username, :password, :email, "no")';

    $create_user_result = $pdo->prepare($create_user_query);
    $create_user_result->execute(
        array(
            ':fname'=>$fname,
            ':username'=>$username,
            ':password'=>$password,
            ':email'=>$email,
        )
    );

    if($create_user_result){
        redirect_to('index.php');
    }else{
        return 'There was an error creating the user.';
    }
}

function getSingleUser($id) {
    $pdo = Database::getInstance()->getConnection();

    $get_user_query = 'SELECT * FROM tbl_user WHERE user_id = :id';
    $get_user_set = $pdo->prepare($get_user_query);
    $get_user_result = $get_user_set->execute(
        array(
            ':id'=>$id
        )
    );

    if($get_user_result){
        return $get_user_set;
    }else{
        return 'There was a problem accessing the user.';
    }
}

function editUser($fname, $username, $password, $email, $id) {
    //TODO: set up database connection
    $pdo = Database::getInstance()->getConnection();

    // run the proper sql query to update tbl_user with provper values
    $update_user_query = 'UPDATE tbl_user SET user_fname = :fname, user_name = :username, user_pass = :password, user_email = :email WHERE user_id = :id';
    $update_set= $pdo->prepare($update_user_query);
    $update_user_result = $update_set->execute(
                array(
                    ':id'=>$id,
                    ':fname'=>$fname,
                    ':username'=>$username,
                    ':password'=>$password,
                    ':email'=>$email
                )
            );

    // if everything goes well, redirect to index.php, otherwise show error message
    if($update_user_result){
        redirect_to('index.php');
    }else{
        return 'There was an error editing the user.';
    }
}

function getAllUsers() {
    $pdo = Database::getInstance()->getConnection();

    $get_user_query = 'SELECT * FROM tbl_user';
    $get_user_set = $pdo->prepare($get_user_query);
    $get_user_result = $get_user_set->execute();

    $users = array();

    if ($get_user_result) {
        while($user = $get_user_set->fetch(PDO::FETCH_ASSOC)) {
            // Parse all users like we did for single
            // and pass into users array

            $currentuser = array();

            $currentuser['id'] = $user['user_id'];
            $currentuser['uname'] = $user['user_name'];
            $currentuser['email'] = $user['user_email'];
            $currentuser['fname'] = $user['user_fname'];

            $users[] = $currentuser;
        }

        return json_encode($users);
    } else {
        return 'There was a problem retrieving the users.';
    }
}

function deleteUser($userID) {
    $query = "DELETE FROM tbl_user WHERE id=:uID";

    $removeUser = $pdo->prepare($query);
    $count = $removeUser->execute(array(':uID' => $userID));

    // this will just return a boolean for success or failure - true ($count)
    // or a message if it's false (can't delete)
    if ($count > 0) {
        return $count;
    } else {
        return "couldn't delete user";
    }
}

function addUser() {

    $pdo = Database::getInstance()->getConnection();

    $newUserQuery = "INSERT INTO tbl_user (user_fname, user_name, user_pass, user_email, user_ip) VALUES (:fname, :username, :password, :email, 'no')";

    $newUserResult = $pdo->prepare($newUserQuery);
    $newUserResult = $newUserQuery->execute(array(
        ':fname' => $_POST['fname'],
        ':username' => $_POST['username'],
        ':password' => $_POST['password'],
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

?>