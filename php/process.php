<?php

    $to = 'mak_sm@abv.bg';
    $subject = 'Dude ,you have a new email !';
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $message = 'Email : '.$email.' ---> '.'The message : '.$message ;
    $message = wordwrap($message, 70, "\r\n");
    $header = 'From : '.$name;
    
    $header_ = 'MIME-Version: 1.0' . "\r\n" . 'Content-type: text/plain; charset=UTF-8' . "\r\n";
    mail($to, '=?UTF-8?B?'.base64_encode($subject).'?=', $message, $header_ . $header);
    
   
?>