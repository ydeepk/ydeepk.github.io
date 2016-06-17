<?php
/********************
****Function PHP*****
********************/

function validateInput($input) {
  $input=trim($input);
  $input=stripslashes($input);
  $input=htmlspecialchars($input);

  return $input;
}


function sendMail($name,$email,$message) {

  $header="From: ".$name."\r\n"."Reply to: ".$email."Content-type: text/html\r\n";
  $message=wordwrap($_POST['message'], 70, "\r\n");
  $to=AUTHMAIL;
  $subject=SUBJECT;

  mail($to,$subject,$message,$header);
}

function error() {

}

?>
