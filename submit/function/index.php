<?php

/************************
**function -> INDEX PHP**
************************/

// some things never change
define(AUTHMAIL,'ydeepkcs@gmail.com');


// send mail
function sendMail($name,$email,$message) {
  $headers  = "From: " . $email . "\r\n";
  $headers .= "Reply-To: ". $email . "\r\n";
  $headers .= "CC:\r\n";
  $headers .= "MIME-Version: 1.0\r\n";
  $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
  $to= AUTHMAIL;
  $message=$_POST['text']."Sender: ".$name;
  $subject="Next Project (www.ydeepk.github.io)";

  if(mail($to,$subject,$message,$header)) {
    include '../thanks/';
  } else {
    error();
  }
}

// validate input
function validateInput($name,$email,$message) {

}

// display error
function error() {

}


?>

/*
htmlspecialchars();

$data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;

Name	Required. + Must only contain letters and whitespace
E-mail	Required. + Must contain a valid email address (with @ and .)
Website	Optional. If present, it must contain a valid URL
Comment	Optional. Multi-line input field (textarea)
*/
