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

/*

// from the form
      $name = trim(strip_tags($_POST['name']));
      $email = trim(strip_tags($_POST['email']));
      $message = htmlentities($_POST['message']);

      // set here
      $subject = "Contact form submitted!";
      $to = 'your@email.com';

      $body = /*<<<*/HTML
$message
HTML;

      $headers = "From: $email\r\n";
      $headers .= "Content-type: text/html\r\n";

      // send the email
      mail($to, $subject, $body, $headers);

      // redirect afterwords, if needed
      header('Location: thanks.html');


      To enable DKIM, create a TXT record for mandrill._domainkey.arun.96.it with the following value:

      v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCrLHiExVd55zd/IQ/J/mRwSRMAocV/hMB3jXwaHH36d9NaVynQFYV8NaWi69c1veUtRzGt7yAioXqLj7Z4TeEUoOLgrKsn8YnckGs9i3B3tVFB+Ch/4mPhXWiNfNdynHWBcPcbJ8kjEQ2U8y78dHZj1YeRXXVvWob2OaKynO8/lQIDAQAB;


*/
