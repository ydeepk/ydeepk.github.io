$(document).ready(function() {

    $(window).load(function() {
      $('.preloader').remove();

      // setting animation
      var delay = 800;
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
        } else {
            $('.fix').removeClass('fixed');
        }
    });

    // Changing the defaults
    window.sr = ScrollReveal({
        duration: 1000,
        viewFactor: 0.4
    });
    sr.reveal('.avatar', {
        reset: false,
        origin: 'left',
        easing: 'ease-in-out',
        scale: 0.6
    });
    sr.reveal('#subHead', {
        reset: false,
        afterReveal: function (domEl) {
          $('#subHead').addClass('animated rubberBand');
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
