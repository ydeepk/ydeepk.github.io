$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 20) {
        $('.move-navbar').addClass('hide');
        $('#navbar-fixed').removeClass('hide');
    } else {
        $('#navbar-fixed').addClass('hide');
        $('.move-navbar').removeClass('hide');
    }
});


$(document).ready(function() {

    $(window).load(function() {
      $('.preloader').remove();
    });

    $('.close-this').click(function() {
        $('#message').closeModal();
    });

    $('.scrollspy').scrollSpy();

    $('.modal-trigger').leanModal();

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
