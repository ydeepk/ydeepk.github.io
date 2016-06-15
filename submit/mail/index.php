<?php
/******************
**MAIL INDEX php**
*****************/

// some things never change

define(AUTHMAIL,'ydeepkcs@gmail.com');

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
