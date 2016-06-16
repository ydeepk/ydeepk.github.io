<?php
/******************
**MAIL INDEX php**
*****************/

// variables at play
$error = $name = $email = $message = "";

require "../function/index.php";

if(isset($_POST['submit'])) {
  $name=validateInput($_POST['name']);
  $email=validateInput($_POST['email']);
  $message=validateInput($_POST['message']);

  sendMail($name,$email,$message);

} else {

  error();

}

?>
