<?php
    include('ums.php');

    //check the request params as they come in
    if (isset($_GET["add_user"])) {
        //echo "post new user";
        $result = addUser($pdo);
    }

    if (isset($_GET["id"])) {
        $userID = $_GET["id"];
        $result = deleteUser($pdo, $userID);
    }

    echo json_encode($result);

    // could add other if statements here for a UMS system like adding or patching a user
    // refer to pan's example file