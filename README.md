features:
1. scroll animation
2. inspiring, engaging unique, highly functional, focus on brand recognition, project is on till satisfaction, attention grabbing UI
3. complete task page
4. Google Analytics
5. perform SEO
6. common files ( serrver redirect)
7. re test for any broken links or Fallbacks
8. Minimize resource files
9. copy scripts back on html pages

# Pending
1.) Bug in skills page For modal window ( FIXED ).
2.) Small screen Menu (FIXED).
3.) Fix animation timing
4.) Description page wise + Basic SEO(Keywords Insertion) + Link Insertion
5.) reduce redirect of http request
6.) remove code js script, css produce bug after minify.
7.) minify the codes.
8.) Add the removed code back




/*
# headers

'From: webmaster@example.com' . "\r\n" .
    'Reply-To: webmaster@example.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

*/


<?php
// multiple recipients
$to  = 'aidan@example.com' . ', '; // note the comma
$to .= 'wez@example.com';

// subject
$subject = 'Birthday Reminders for August';

// message
$message = '
<html>
<head>
  <title>Birthday Reminders for August</title>
</head>
<body>
  <p>Here are the birthdays upcoming in August!</p>
  <table>
    <tr>
      <th>Person</th><th>Day</th><th>Month</th><th>Year</th>
    </tr>
    <tr>
      <td>Joe</td><td>3rd</td><td>August</td><td>1970</td>
    </tr>
    <tr>
      <td>Sally</td><td>17th</td><td>August</td><td>1973</td>
    </tr>
  </table>
</body>
</html>
';

// To send HTML mail, the Content-type header must be set
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

// Additional headers
$headers .= 'To: Mary <mary@example.com>, Kelly <kelly@example.com>' . "\r\n";
$headers .= 'From: Birthday Reminder <birthday@example.com>' . "\r\n";
$headers .= 'Cc: birthdayarchive@example.com' . "\r\n";
$headers .= 'Bcc: birthdaycheck@example.com' . "\r\n";

// Mail it
mail($to, $subject, $message, $headers);
?>




![alt tag](https://raw.github.com/dogfalo/materialize/master/images/materialize.gif)
===========

[![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/Dogfalo/materialize?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
Materialize, a CSS Framework based on material design

### Current Version : v0.97.0

## Sass Requirements:
- Ruby Sass 3.3+, LibSass 0.6+

## Supported Browsers:
Chrome 35+, Firefox 31+, Safari 7+, IE 10+

## Changelog
- v0.97.0 (June 21, 2015)
  - **Documentation changed to use Official Google Icon web font**
  - **Input errors added**
  - Flicker on Firefox on dropdowns fixed
  - Pagination made more responsive
  - Modal now prevents scrolling
  - Modal animation added
  - Support for multiple modals added
  - Programmatic control of FAB to open/close added
  - Programmatic control of slider to play/pause added
  - Plus many more bug fixes
- v0.96.1 (April 6, 2015)
  - Dropdown Fixes
  - Materialize functions fixed for Meteor
- v0.96.0 (April 1, 2015)
  - **Toasts, transitions, scrollfire added under Materialize namespace**
  - **Dropdown is now created as a child of its parent**
  - Collapsibles supports nesting
  - Modal Bottom Sheet added
  - Indeterminate Checkboxes added
  - New Checkbox Style Added
  - Text Inputs supports placeholder/readonly
  - Google Inbox-like Collapsible added
  - Text Character Counter added
  - Waves no longer breaks on SVG's

- v0.95.3 (Feb 25, 2015)
  - Parallax image loading / responsiveness fixes
  - Date picker supports month/year as dropdown
  - Dismissable collection items
  - Avatar collection items
  - Pagination Added
  - ScrollFire fixes


## Contributing
[Please read CONTRIBUTING.md for more information](CONTRIBUTING.md)
