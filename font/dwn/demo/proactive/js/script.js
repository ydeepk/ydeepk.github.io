$(document).ready(function() {

    $(window).load(function() {
        $('.preloader').remove();
    });

    /***************** Header BG Scroll ******************/

    $(function() {
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();

            if (scroll >= 10) {
                $('nav').addClass('nav-fix-height reverse-gradient-bg z-depth-1');
                $('nav').removeClass('transparent z-depth-0');
                $('.brand-logo,nav ul').css({
                    "margin-top": "0px"
                });
            } else {
                $('nav').removeClass('nav-fix-height reverse-gradient-bg z-depth-1');
                $('nav').addClass('transparent z-depth-0');
                $('.brand-logo,nav ul').css({
                    "margin-top": "50px"
                });
            }
        });
    });

    $('.close').click(function(e) {
        $('#message').closeModal();
        $('#request').closeModal();
    });

    $('.scrollspy').scrollSpy();

    $('.modal-trigger').leanModal();

    /******************  SMOOTH SCROLL**********************/
    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 2000);
                    return false;
                }
            }
        });
    });
});
