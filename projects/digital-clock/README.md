# The Time Project
1. Basic Clock [ choose option 24 / 12 hour, location based, zone wise ]
2. World Clock
3. Full date
4. Alarm Clock

/*

World clock Easy
What time is it in Tokyo? London? Sydney? Try making a wall of clocks, like a newsroom, that shows the time in different cities around the world. Try creating new functions that add or subtract hours from your current time.

Full date Medium
Showing the time is great, but let’s see if we can use all that date information. See if you can use methods like getDay, getDate, getMonth, and getYear to make a daily calendar display.

Alarm Clock Hard
Put your clock to work. See if you can make your clock do something attention getting, like change the background to eye catching color or an animated gif, when a certain time is reached.

*/


/*

function displayTime() {
    var meridiem = "AM";
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    // Convert from 24 hour to 12 hour format
    // and keep track of the meridiem.

    if(hours > 12) {
      hours = hours - 12;
      meridiem = "PM";
    }

    // 0 AM and 0 PM should read as 12
    if(hours === 0) {
      hours = 12;
    }

    var clockDiv = document.getElementById('clock');
    clockDiv.innerText = hours+" : "+minutes+" : "+ seconds+" "+meridiem;
}

displayTime();

setInterval(displayTime, 1000);

*/













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
