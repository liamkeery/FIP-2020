<?php
    include('ums.php');
    include('cms.php');

    //check the request params as they come in
    if (isset($_GET["add_user"])) {
        //echo "post new user";
        $result = addUser($pdo);
    }

    if (isset($_GET["add_faq"])) {
        //echo "post new user";
        $result = addFaq($pdo);
    }

    if (isset($_GET["faq_id"])) {
        $faqID = $_GET["faq_id"];
        $result = deleteFaq($pdo, $faqID);
    }

    if (isset($_GET["id"])) {
        $userID = $_GET["id"];
        $result = deleteUser($pdo, $userID);
    }

    if (isset($_GET['faq'])) {
        $tbl = 'tbl_faq';
        $result = getAllFaq($pdo);
    }

    echo json_encode($result);

    // could add other if statements here for a UMS system like adding or patching a user
    // refer to pan's example file