$(function() {

  // declaration
let $preloader = $('.preloader');
let $btnCollapse = $('.button-collapse');
let $btnMenu = $('.btn-menu');
let $offscreenMenu = $('.offscreen-menu');
let $modalTrigger = $('.modal-trigger');
let $close = $('.close');
let $btnView = $('.btn-view');
let $myWork = $('#my-work');
let $card = $('.card');
let $cardRow = $('.card-row-1, .card-row-2');
let $nothingToShow = $('#nothing-to-show');
let $window = $(window);

// upon page load
$preloader.remove();
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



// for card
if(!$cardRow.hasClass('hide')) { // if true
    $cardRow.addClass('hide');
}

// close
$close.click(function() {
    $nothingToShow.closeModal();
    $('.menu-icon').remove();
    $offscreenMenu.addClass('hide');
    $btnMenu.html('<i class="material-icons blue-grey-text menu-icon">menu</i>');
});

$btnView.click(function() {
  let $counter = $btnView.val();
    $cardRow.removeClass('hide');
    $card.addClass('animated fadeIn');
    countCLick($counter);
    if($window.width() <= 601) {
        $myWork.css({"height":"150rem"},{"background-image":"url(../img/my-work-1400.jpg)"});
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

});
