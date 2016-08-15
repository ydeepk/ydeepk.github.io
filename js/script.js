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


    // Button click
    $('#hire, #hire-me').click(function() {
        if($('.modal').hasClass('animated fadeOutDownBig')) {
          $('.modal').removeClass('animated fadeOutDownBig');
          $('.modal').addClass('animated tada');
        } else {
          $('.modal').addClass('animated tada');
        }
    });

    $('.close').click(function() {
        $('.modal').closeModal();
        $('.modal').removeClass('animated tada');
        $('.modal').addClass('animated fadeOutDownBig');
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
    window.sr = ScrollReveal({reset: true, duration: 1200, viewFactor: 0.5, easing: 'ease-in-out', scale: 0});
    sr.reveal('.avatar', {delay: 200, origin: 'right', scale: 0.6});
    sr.reveal('#subHead', {delay: 800, origin: 'left', scale: 0.4});
    sr.reveal('.description', {delay: 1600, origin: 'left', scale: 0.2});
    sr.reveal('.quote', {delay: 800});
    sr.reveal('.author', {delay: 850});
    sr.reveal('.box', {delay: 200,scale: 0.6});
    sr.reveal('.box-1', {delay: 800,scale: 0.4});
    sr.reveal('.box-2', {delay: 1200,scale: 0.2});


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
