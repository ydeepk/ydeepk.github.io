$(document).ready(function() {

  /* Fixed Navbar */
  $(window).bind('scroll', function() {
      var navHeight = $(window).height() - 70;
      if ($(window).scrollTop() > navHeight) {
          $('.fix').addClass('fixed');
      } else {
          $('.fix').removeClass('fixed');
      }
  });

  // upon page load
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

    // opening small screen menu
    $('.btn-menu').click(function() {
          $('#smallScreen-menu').removeClass('hide');
          $('#smallScreen-menu').addClass('animated rubberBand');
      });

    // closing smallScreen-menu
    $('.smallScreen-close, .insert, .adb, .mail').click(function() {
      $('#smallScreen-menu').removeClass('animated rubberBand');
      $('#smallScreen-menu').addClass('hide');
    });

    // Button click for hire
    $('#hire, #hire-me').click(function() {
        if($('#hire-me-window').hasClass('animated fadeOutDownBig')) {
          $('#hire-me-window').removeClass('animated fadeOutDownBig');
          $('#hire-me-window').addClass('animated pulse');
          setTimeout(function() { $('#thumbUp').removeClass('hide'); }, 1600);
        } else {
          $('#hire-me-window').addClass('animated pulse');
          setTimeout(function() { $('#thumbUp').removeClass('hide'); }, 1600);
        }
    });

    $('.close').click(function() {
        $('.modal').closeModal();
        if(('#thumbUp').hasClass('hide')) {
          $('#thumbUp').addClass('hide');
        }
        if(('#hire-me-window').hasClass('animated pulse')) {
          $('#hire-me-window').removeClass('animated pulse'); $('#hire-me-window').addClass('animated fadeOutDownBig');
      }
    });

    $('.scrollspy').scrollSpy();

    $('.modal-trigger').leanModal();


    // Changing the defaults
    window.sr = ScrollReveal({duration: 1200, viewFactor: 0.5, easing: 'ease-in-out', scale: 0});
    sr.reveal('.avatar', {delay: 200, origin: 'right', scale: 0.6});
    sr.reveal('#subHead', {delay: 600, origin: 'left', scale: 0.4});
    sr.reveal('.description', {delay: 800, origin: 'left', scale: 0.2});
    sr.reveal('.quote', {delay: 800});
    sr.reveal('.author', {delay: 850});
    sr.reveal('.box', {viewFactor: 0.7, delay: 200,scale: 0.6});
    sr.reveal('.box-1', {viewFactor: 0.7, delay: 800,scale: 0.4});
    sr.reveal('.box-2', {viewFactor: 0.7, delay: 1200,scale: 0.2});
    sr.reveal('#interest-head', {viewFactor: 0.9, delay: 400, scale: 0});
    sr.reveal('#hire-me', {viewFactor: 0.9, delay: 800, scale: 0.2});
    sr.reveal('#view', {viewFactor: 0.7, delay: 800, scale: 0.2});
    sr.reveal('#liked-head', {viewFactor: 0.9, delay: 800, scale: 0});
    sr.reveal('#suggestion', {viewFactor: 0.6, delay: 400, scale: 0.2});
    sr.reveal('#social', {viewFactor: 0.8, delay: 800, scale: 0});


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
