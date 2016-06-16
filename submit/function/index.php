<?php

/************************
**function -> INDEX PHP**
************************/

// some things never change
define(AUTHMAIL,'ydeepkcs@gmail.com');


// send mail to author
function sendMail($name,$email,$message) {
  $headers  = "From: " . $email . "\r\n";
  $headers .= "Reply-To: ". $email . "\r\n";
  $to= AUTHMAIL;
  $message=$_POST['message']."Sender: ".$name;
  $subject="Next Project (www.ydeepk.github.io)";

  if(mail($to,$subject,$message,$header)) {
    include '../thanks/index.php';
  } else {
    error();
  }
}

// send acknowledgemnt mail
function acknowledgementMail($name,$email) {
  $headers  = "From: ".AUTHMAIL."\r\n";
  $headers .= "Reply-To: ".AUTHMAIL."\r\n";
  $headers .= "CC:\r\n";
  $headers .= "MIME-Version: 1.0\r\n";
  $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
  $to= $email;
  $message="Thanks for reaching out. Get right back to you soon :-)"."- Deepak Yadav";
  $subject="Thanking you For Reaching out.";

  mail($to,$subject,$message,$headers);

}


// validate input
function validateInput($data) {
  $data=trim($data);
  $data=stripslashes($data);
  $data=htmlspecialchars($data);

  return $data;
}

// display error
function error() {
  print("OOps failed to send mail for unknown reasons. :-( ");
}


?>

/*

Name	Required. + Must only contain letters and whitespace
E-mail	Required. + Must contain a valid email address (with @ and .)
Website	Optional. If present, it must contain a valid URL
Comment	Optional. Multi-line input field (textarea)
*/
