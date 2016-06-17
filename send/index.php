<?php
/***********************
*****Main send file*****
***********************/
require "con-var.php";
require "fun.php";

if(isset($_POST["submit"])) {
  $name=validateInput($_POST["name"]);
  $email=validateInput($_POST["email"]);
  $message=validateInput($_POST["message"]);

  sendMail($name,$email,$message); // send mail

} else {

  error(); // get error

}

?>
