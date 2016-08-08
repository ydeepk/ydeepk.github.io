/* Fixed Navbar */
$(window).bind('scroll', function() {
    var navHeight = $(window).height() - 70;
    if ($(window).scrollTop() > navHeight) {
        $('.fix').addClass('fixed');
    } else {
        $('.fix').removeClass('fixed');
    }
});


$(document).ready(function() {

    $(window).load(function() {
      $('.preloader').remove();
    });

    $('.close').click(function() {
        $('#hire-me-window').closeModal();
    });

    $('.scrollspy').scrollSpy();

    $('.modal-trigger').leanModal();

    /* $().animateCss();
    $().addClass('animated fadein');
    */

  /*animation*/
  $('.title').delay(6000).addClass('animated bounceIn');
  $('#desig').delay(6400).addClass('animated fadeInRight');
  $('#quote').delay(7000).addClass('animated fadeInLeft');
  $('#hire').delay().addClass('animated bounceIn');

  var delay = 2000;
  setTimeout(funtion() {
    $('#hire').addClass('animated bounceIn');
  }, delay);

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
