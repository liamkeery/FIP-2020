<?php

function login($username, $password, $ip){

    $pdo = Database::getInstance()->getConnection();

    $check_exist_query = 'SELECT COUNT(*) FROM tbl_user WHERE user_name= :username';
    $user_set = $pdo->prepare($check_exist_query);
    $user_set->execute(
        array(
            ':username' => $username,
        ));

    if($user_set->fetchColumn()>0){
        $get_user_query = 'SELECT * FROM tbl_user WHERE user_name = :username';
        $get_user_query .= ' AND user_pass = :password';
        $user_check = $pdo->prepare($get_user_query);
        $user_check->execute(
            array(
                ':username'=>$username,
                ':password'=>$password
            )
        );

        while($found_user = $user_check->fetch(PDO::FETCH_ASSOC)){
            $id = $found_user['user_id'];

            $message = 'You are now logged in';
            
            $_SESSION['user_id'] = $id;
            $_SESSION['user_name'] = $found_user['user_fname'];

            $update_query = 'UPDATE tbl_user SET user_ip = :ip WHERE user_id = :id';
            $update_set= $pdo->prepare($update_query);
            $update_set->execute(
                array(
                    ':ip'=>$ip,
                    ':id'=>$id
                )
            );
         }

         $user = array();

        $user['id'] = $found_user['user_id'];
        //$user['admin'] = $found_user['user_admin'];
        //$user['avatar'] = $found_user['user_avatar'];
        //$user['permissions'] = $found_user['user_permissions'];
        $user['uname'] = $found_user['user_name'];

        return json_encode($user);

    }else{
        $message = 'User does not exist.';
    }

    return $message;
}
?>