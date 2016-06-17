<?php
/***********************
*****Main send file*****
***********************/
require "con-var.php";
require "fun.php";


?>

The Script

First we want to start with the opening PHP tag and then add the subject variable and the mailto variable. This will add the subject to the email and tell the script where to send the email.
<?php
$emailSubject = 'Customer Has a Question!';
$webMaster = 'you@yourdomain.com';
Next we want to let the server know what information to get from the form. You need to make sure that the names of the fields are the same as what you put here, otherwise it will not gather the information properly.
$nameField = $_POST ['name'];
$emailField = $_POST['email'];
$questionField = $_POST ['question'];
The "<<<EOD" lets the server know that everything between that tag goes in the email body. However you arrange it here, it will show up the same way in the email.
$body = <<<EOD
<br><hr><br>
Name: $name <br>
Email: $email <br>
Questions: $question <br>
EOD;
$headers = "From: $email\r\n";
$headers .= "Content-type: text/html\r\n";
The first $header tag enables the person's email address to show up properly. "\r\n" is a line break that lets the server know that the line has ended. The other $header tag lets the server know that this is both text and HTML; if this is not there then all the <br> tags and other coding will show up in the email.
The following code lets the server know that if everything is successful, send all the previous variables to the email client
$success = mail($webMaster, $emailSubject, $body, $headers);
Between the following EOD tags you would want to put you confirmation page.
$theResults = <<<EOD
EOD;
The following code allows what is written between the opening and closing EOD statements to be seen on the page. Lastly you want to put the closing PHP tag in and close the script.
echo "$theResults";
?>
Installation of the Script

For this to work correctly we will need two php pages. One will contain the form and the other will contain the mailing script itself.
Script Page - You will want to take the code that I have shown you and put into a new php page and name it form_mailer.php. Remember to change $webmaster to your own email address. Also, if you are going to have another text field, remember to add it to the code. Lastly once you have closed the php code, copy the code for your form page (or from a contact page on your website), and add after the closing php tag.
Form Page - You will want to make a second php page then name it form.php. Then add a form field, and then put a table with 4 rows and 2 columns in it. Then add 3 text fields, one per line, with the label and id of "name, email, and question". Make sure that the labels are in the first column. The last thing you need is to add a submit button, and set the form's action as form_mailer.php, with the method set to POST.
You may download the entire script here.
Conclusion

Having an mail/contact form on your website is a important method of contact in the business world. It allows customers to quickly and efficiently send emails. I hope this mailer script and sample will help you with your website. In my next article I will show you how to protect your message from spam using a Captcha mechanism.


<?php
//if "email" variable is filled out, send email
  if (isset($_REQUEST['email']))  {

  //Email information
  $admin_email = "someone@example.com";
  $email = $_REQUEST['email'];
  $subject = $_REQUEST['subject'];
  $comment = $_REQUEST['comment'];

  //send email
  mail($admin_email, "$subject", $comment, "From:" . $email);

  //Email response
  echo "Thank you for contacting us!";
  }

  //if "email" variable is not filled out, display the form
  else  {
?>

 <form method="post">
  Email: <input name="email" type="text" /><br />
  Subject: <input name="subject" type="text" /><br />
  Message:<br />
  <textarea name="comment" rows="15" cols="40"></textarea><br />
  <input type="submit" value="Submit" />
  </form>

<?php
  }
?>
So let’s now review what the form is actually doing.

1. The first part checks to make sure the email input field is filled out. If it is not, then it will display the HTML form on the page. If the email is in fact, set (after the visitor fills out the form), it is ready to send.

2. When the submit button is pressed, after the form is filled out, the page reloads and reads that the email input is set, so it sends the email.

Keep in mind, this is a basic tutorial to explain how to use the mail() function in PHP. Using the method, exactly the way it is, can be insecure and should not be used on your website. This tutorial is aiming to provide you the basic of how to use phpmail() and for further use, you may want to look into securing your code to possible hacks.
