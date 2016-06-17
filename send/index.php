<?php
/***********************
*****Main send file*****
***********************/
require "con-var.php";
require "fun.php";

if(isset($_POST["submit"])) {
  $name=validateInput($_REQUEST["name"]);
  $email=validateInput($_REQUEST["email"]);
  $message=validateInput($_REQUEST["message"]);

  sendMail($name,$email,$message); // send mail

} else {

  error(); // get error

}

?>
