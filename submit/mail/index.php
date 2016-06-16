<?php
/******************
**MAIL INDEX php**
*****************/

// variables at play
$error = $name = $email = $message = "";

require "../function/";

if($SERVER['REQUEST_METHOD']=='POST') {

  $name=validateInput($_POST['name']);
  $email=validateInput($_POST['email']);
  $message=validateInput($_POST['message']);

  sendMail($name,$email,$message);

} else {

  error();

}

?>
