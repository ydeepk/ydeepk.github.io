/*

  # POMODORO CLOCK ( FreeCodeCamp challange ) | started on 2017, Feb 20
  author : Deepak Yadav | https://ydeepk.github.io
  License :

*/

/*----------------------
    Declare variables
  --------------------*/

  // Store objects
var $session_slider = $("#pomodoro-session-slider"),
    $break_slider = $("#pomodoro-break-slider"),
    $count_slider = $("#pomodoro-count-slider"),
    $session = $("#pomodoro-session"),
    $brk = $("#pomodoro-break"),
    $count = $("#pomodoro-count"),
    $pomodoro_clock = $('.pomodoro-clock'),
    $pomodoro_message = $('.pomodoro-message'),
    $pomodoro_completed = $('#pomodoro-completed');

  // Put values
var session_length = $session_slider.val(),
    break_length = $break_slider.val(),
    count_length = $count_slider.val(),
    counter = 0,
    minutes = session_length,
    time_interval = 0,
    message = "Lets Get the ball rolling.",
    count_message = "Pomodoros completed none!";

    //  write values on document
    //  clock, session, break, Pomodoros count,
    //  and Display Messages.
    $pomodoro_clock.text(minutes + ":" + "00");
    $session.text(session_length);
    $brk.text(break_length);
    $count.text(count_length);
    $pomodoro_message.text(message);
    $pomodoro_completed.text(count_message);



/*------------------
      FUNCTIONS
  -----------------*/


  // Minutes to Seconds
function minToSec(minute) {

  // Store minutes and seconds in min & secs
  var min = Math.floor(minute%3600/60);
  var sec = Math.floor(minute%3600%60);

  // after converting to secs, send back in order
  return (min<10?"0"+min:min)+":"+(sec<10?"0"+sec:sec);

}


  // Start Pomodoros function
function startPomodoro() {

  // Precaution: clear values if stored in time interval
  // otheirwise messes up with time.
  clearInterval(time_interval);

  // Display clock message
  message = "No TIME to loose.";
  $pomodoro_message.text(message);

  // store & conver minute into seconds
  minutes = 60*$session_slider.val();

  // call interval every 1000ms
  time_interval = setInterval(function() {

    // reduce minute by 1 each iteration
    // and write current clock value
    minutes--;
    $pomodoro_clock.text(minToSec(minutes));

    // when timer goes 0
    if(minutes <= 0) {

      // Reduce Pomodoros count by 1
      // & increase counter by 1
      count_length--;
      counter++;

      // Write Pomodoro current count
      count_message = "Pomodoros completed "+counter;
      $pomodoro_completed.text(count_message);

      // call stop Pomodoro and
      // Pomodoro Break function
      stopPomodoro();
      pomodoroBreak();

    }

  }, 1000);
}


  // Stop Pomodoros function
function stopPomodoro() {

  // clear all values
  clearInterval(time_interval);

}


  // Pomodoro Break function
function pomodoroBreak() {

  // Precaution: clear values if stored in time interval
  // otheirwise messes up with time.
  clearInterval(time_interval);

  // Execute this, when Pomodoro count length goes 0.
  if (count_length <= 0) {

    // write Pomdoros completed
    message = "Enough ? Lets call it a Day!";
    $pomodoro_message.text(message);

    // call Stop Pomodoros function
    stopPomodoro();

  } else {

        // write Pomodoros clock message
        message = "Fwew... Let's CATCH a breath Dear";
        $pomodoro_message.text(message);

        // convert minutes into seconds
        minutes  = 60*$break_slider.val();

        // call interval every 1000ms
        time_interval = setInterval(function() {

          // reduce minute by 1 each iteration
          // and write current clock value
          minutes--;
          $pomodoro_clock.text(minToSec(minutes));

          // when timer goes 0
          if(minutes<=0) {

            // call stop Pomodoro and
            // Start Pomodoro function
            stopPomodoro();
            startPomodoro();

          }

        }, 1000);
  }

}


function resetPomodoro() {

  // Precaution: clear values if stored in time interval
  // otheirwise messes up with time.
  clearInterval(time_interval);

  // Put Pomodoros session, break, count values
  session_length = $session_slider.val();
  break_length = $break_slider.val();
  count_length = $count_slider.val();

  minutes = session_length;
  time_interval = 0;

  // store Message
  message = "Lets Get the ball rolling.";
  count_message = "Pomdoros completed none!";

  // Rewrite message
  $pomodoro_clock.text(minutes + ":" + "00");
  $session.text(session_length);
  $brk.text(break_length);
  $count.text(count_length);
  $pomodoro_message.text(message);
  $pomodoro_completed.text(count_message);

}



/*---------------------------------
    EVENTS (Click, slide, etc..)
  -------------------------------*/
$(document).ready(function() {
// when slides moves //
// for session, break, and Pomodoro count.//
$session_slider.mousemove(function() {
    $session.text($(this).val());
    $pomodoro_clock.text((($(this).val() < 10) ? "0" + $(this).val() : $(this).val()) + ":" + "00");
    // note: puting in memroy using variables didnt work for range
});

$break_slider.mousemove(function() {
    $brk.text($(this).val());
});

$count_slider.mousemove(function() {
    $count.text($(this).val());
    count_length = $(this).val();
});



// when button clicks //
$('.open-settings').on('click', function() {
    $('.pomodoro-settings-container').removeClass('hidden').addClass('animated fadeIn');
    $('.pomodoro-clock-container').addClass('hidden').removeClass('fadeIn');
});


// close settings //
$('.close-settings').on('click', function() {
    $('.pomodoro-settings-container').addClass('hidden').removeClass('fadeIn');
    $('.pomodoro-clock-container').removeClass('hidden').addClass('animated fadeIn');
});


// volume-on / off //
$('.volume-on').on('click', function() {
    if ($(this).text() === 'volume_up') {
        $(this).text('volume_off');
    } else {
        $(this).text('volume_up');
    }
});

/*
40 -veg
83 - veg
120 - license
*/

// Start Pomodoro //
$('.start').on('click', function() {
      $('.start').addClass('hidden');
      $('.stop,.reset').removeClass('hidden');
      startPomodoro();
});

// Stop Pomodoro //
$('.stop').on('click', function() {
  if($(this).text()==="stop") {
    $(this).text("play_circle_outline");
    stopPomodoro();
  } else {
    $(this).text("stop");
    startPomodoro();
  }
});

// reset Pomodoro //
$('.reset').on('click', function() {
    $('.stop,.reset').addClass('hidden');
    $('.start').removeClass('hidden');
    resetPomodoro();
});

});
