$(function() {

  // declaration
var $preloader = $('.preloader'),
  $btnCollapse = $('.button-collapse'),
  $btnMenu = $('.btn-menu'),
  $offscreenMenu = $('.offscreen-menu'),
  $modalTrigger = $('.modal-trigger'),
  $close = $('.close'),
  $btnView = $('.btn-view'),
  $myWork = $('#my-work'),
  $card = $('.card'),
  $cardRow = $('.card-row-1, .card-row-2'),
  $nothingToShow = $('#nothing-to-show'),
  $menuIcon = $('.menu-icon'),
  $window = $(window);

// upon page load
$btnCollapse.sideNav();
$modalTrigger.leanModal();

/*
   Button click action
*/

// open menu

$btnMenu.click(function() {
  if($('.menu-icon').text() == "menu") {
    $('.menu-icon').remove();
    $btnMenu.html('<i class="material-icons blue-grey-text menu-icon">close</i>');
    $offscreenMenu.removeClass('hide').removeClass('animated bounceOutUp').addClass('animated bounceInDown');
  } else {
    $('.menu-icon').remove();
    $btnMenu.html('<i class="material-icons blue-grey-text menu-icon">menu</i>');
    $offscreenMenu.removeClass('animated bounceInDown').addClass('animated bounceOutUp').setTimeout(function() { $offscreenMenu.addClass('hide'); }, 800);
  }

});

// Fix on scroll brand logo + menu button
  $(window).scroll(function() {
            var scroll = $(window).scrollTop();

            if (scroll >= 20) {
                $('.brand-logo, .btn-menu').css({
                    "margin-top": "-100"
                });
            } else {
                $('.brand-logo,.btn-menu').css({
                    "margin-top":"0"
                });
            }
        });

// for card
if(!$cardRow.hasClass('hide')) { // if true
    $cardRow.addClass('hide');
}

// close
$close.click(function() {
    $nothingToShow.closeModal();
    $menuIcon.remove();
    $offscreenMenu.addClass('hide');
    $btnMenu.html('<i class="material-icons blue-grey-text menu-icon">menu</i>');
});

$btnView.click(function() {
  var $counter = $btnView.val();
    $cardRow.removeClass('hide');
    $card.addClass('animated fadeInUp');
    countCLick($counter);
    if($window.width() <= 601) {
        $myWork.css({"height":"100vh"},{"background-image":"url(../img/my-work-1400.jpg)"});
    } else {
        $myWork.css({"height":"92rem"},{"background-image":"url(../img/my-work-1400.jpg)"});
    }
});

function countCLick(counter) {
  counter = parseInt(counter,10);
  if(counter>1) {
    $nothingToShow.openModal();
  }
  $btnView.val(1+counter);
}

if($window.width() <= 601) {
    $myWork.css({"height":"100vh"},{"background-image":"url(../img/my-work-1400.jpg)"});
}

/*
   Smooth scroll
*/
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

  // remove proeloader
  $preloader.delay(350).fadeOut('slow');

});
