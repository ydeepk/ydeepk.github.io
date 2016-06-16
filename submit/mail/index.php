<?php
/******************
**MAIL INDEX php**
*****************/

// variables at play
$error = $name = $email = $message = "";

require "../function/";

if($SERVER['REQUEST_METHOD']=='POST') {

  if(validateInput($name,$email,$message)) {

    sendMail($name,$email,$message);

  } else {
    error();
  }

}

?>
