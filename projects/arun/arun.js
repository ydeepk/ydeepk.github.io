/***************************** document ready *************************/
$(document).ready(function() {
    /*****************************   Initialising various components ************************************/
    $(".button-collapse").sideNav(); //sideNav
    $('.scrollspy').scrollSpy(); //scrollspy
    $('.modal-trigger').leanModal();
    /*************************** header transition *********************/
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 20) {
            $('header').addClass('fixed');
            $('header').addClass('z-depth-1');
            $('header').css({
                "height": "80px",
                "background-color": "#FFFFFF"
            });
            $('.name h1').css({
                "margin-top": "-5px",
                "font-size": "3.8rem"
            });
            $('nav').css({
                "margin-top": "-90px"
            });
        } else {
            $('header').removeClass('fixed');
            $('header').removeClass('z-depth-1');
            $('header').css({
                "height": "150px",
                "background-color": "transparent"
            });
            $('.name h1').css({
                "margin-top": "32px",
                "font-size": "4.2rem"
            });
            $('nav').css({
                "margin-top": "-100px"
            });
        }
    });

    /******************** SMOOTH SCROLL ***********************/
    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 2200);
                    return false;
                }
            }
        });
    });
});
/************************* / document ready **************************/
