<?php
    include('connect.php');

    function getAllFaq($conn) {
        $query = 'SELECT * FROM tbl_faq';

        $getAllFaq = $conn->prepare($query);
        $getAllFaq->execute();

        $faqs = $getAllFaq->fetchAll(PDO::FETCH_ASSOC);

        return $faqs;
    }

    function addFaq($conn) {
        
        $query = $conn->prepare("INSERT INTO tbl_faq (question, response) VALUES (:question, :response)");

        $newFAQResult = $query->execute(array(
            ':question' => $_POST['question'],
            ':response' => $_POST['response'],
        ));

        if ($newFAQResult) {
            // success
            return array('result' => $newFAQResult);
        } else {
            // failure
            return array('result' => false);
        }
    }

    function deleteFaq($conn, $faqID) {
        $query = "DELETE FROM tbl_faq WHERE id=:id";

        $removeFAQ = $conn->prepare($query);
        $deletedFAQResult = $removeFAQ->execute(array(':id' => $faqID));

        if ($deletedFAQResult) {
            return array('result' => $deletedFAQResult);
        } else {
            return array('result' => false);
        }
    }

?>