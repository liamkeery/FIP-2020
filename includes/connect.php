<?php 

    $db_dsn = array(
        'host' => 'localhost',
        'dbname' => '',
        'charset' => 'utf8',
    );
    
    $dsn = 'mysql:' . http_build_query($db_dsn, '', ';');

    // Set up connection credentials
    $db_user = 'root'; // blank for windows
    $db_pass = 'root';

    $pdo = new PDO($dsn, $db_user, $db_pass); //Change depending on the db

    /* check connection */
    try {
        $pdo = new PDO($dsn, $db_user, $db_pass);//Change depending on the db
    } catch (PDOException $exception) {
        echo "Connection error: " . $exception->getMessage();
        exit();
    }
