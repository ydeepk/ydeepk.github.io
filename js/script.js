$(document).ready(function() {

    $(window).load(function() {
      $('.preloader').remove();

      // setting animation
      var delay = 1100;
      setTimeout(function() { $('.title').removeClass('hide'); }, delay);
      setTimeout(function() { $('#desig').removeClass('hide'); }, delay+500);
      setTimeout(function() { $('#quote').removeClass('hide'); }, delay+1000);
      setTimeout(function() { $('#hire').removeClass('hide'); }, delay+1500);
      setTimeout(function() { $('#scroll').removeClass('hide'); }, delay+2000);
    });

    $('.close').click(function() {
        $('#hire-me-window').closeModal();
    });

    $('.scrollspy').scrollSpy();

    $('.modal-trigger').leanModal();

    /* Fixed Navbar */
    $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 70;
        if ($(window).scrollTop() > navHeight) {
            $('.fix').addClass('fixed');
            $('.brand-logo').addClass('animated rubberBand');
            setTimeout(function() { $('.avatar').addClass('animated tada'); }, 1600);
            setTimeout(function() { $('#about-subHead').addClass('animated pulse'); }, 2600);
            setTimeout(function() { $('.description').addClass('animated pulse'); }, 3400);
        } else {
            $('.fix').removeClass('fixed');
        }
    });


    /* smooth scroll */
    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

});
