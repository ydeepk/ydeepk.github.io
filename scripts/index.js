// my new website launching time
// started on March 9th , 2017
// ydeepk | deepak yadav ( https://ydeepk.github.io )
// count down script

// define end date
var endDate = new Date('March 22 2017 11:59:59  GMT+0530');

// get me remaining time
function getRemainingTime(date) {

    // get difference between current date and end date
    var t = Date.parse(date) - Date.parse(new Date());

    // convert into Date, and Hours, minutes, seconds
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var minutes = Math.floor((t / (1000 * 60)) % 60);
    var seconds = Math.floor((t / 1000) % 60);

    // handle single length caracters,
    // eg. when 9 min = 09, 9 sec = 09
    hours = (hours < 10) ? ("0" + hours) : hours;
    minutes = (minutes < 10) ? ("0" + minutes) : minutes;
    seconds = (seconds < 10) ? ("0" + seconds) : seconds;

    // send back as an Object
    return {
        "days": days,
        "hours": hours,
        "minutes": minutes,
        "seconds": seconds
    };

}

// start the clock
function startClock(id, end) {

    // define for id object
    var myclock = $('#myclock');

    // call time every 1 sec
    var timeInterval = setInterval(function() {

        // calculate time remaining
        var d = getRemainingTime(end);

        // display fetched time in clock
        var show = d.days + " Day's | " + d.hours + ':' + d.minutes + ":" + d.seconds;
        myclock.text(show);

        // when time will end i.e becomes 0
        if (d.total <= 0) {

            // stop the clock by removing timeInterval
            clearInterval(timeInterval);

            // message when time is 0
            show = "Launching anytime !";
            myclock.text(show);

        }

    }, 1000);

}

$(document).ready(function() {

    $('.statement').typeIt({
            autoStart: false
        })
        .tiType('Hello there, I know you were expecting my <b>awesome website</b> here.')
        .tiBreak()
        .tiType('However, I am giving it, quite a bit makeover to it. ')
        .tiBreak()
        .tiType('Why dont you <i><b>check back my website</b> in</i> ...');


    // start the clock
    setTimeout(function() {
        $('#myclock').addClass('clock-padding');
        startClock('myclock', endDate);
    }, 17400);


});
