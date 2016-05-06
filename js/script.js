/*
    ******************************|
    |            Custom Js            |
    *******************************
    
*/

//Preloader
var preloader = $('.preloader');
	$(window).load(function(){
 		preloader.remove();
        event.preventDefault();
});
  
/*************************** header transition *********************/
$(window).scroll(function() { 
 var scroll = $(window).scrollTop();
 if(scroll>=20) {
     $('header').addClass('fixed');
    $('.brand-logo').css({"margin-top":"0px","font-size":"2rem"});
    $('#nav-mobile').css({"margin-top":"-30px"});
    $('.menu').css({"margin-top":"1rem"});
    $('nav').css({"height":"5rem","background-color":"#FFFFFF"});
}
else {
     $('header').removeClass('fixed');
     $('header').css({"height":"150px","background-color":"transparent"});
     $('.brand-logo').css({"margin-top":"2.5rem","font-size":"4.2rem !important"});
    $('#nav-mobile').css({"margin-top":"0"});
    $('.menu').css({"margin-top":"2.5rem"});
}
});
    
/* Menu Mobile */
$('.menu').click(function() {
    $('.menu-mobile').toggleClass('hide');
    event.preventDefault();
});
$('.close,.menu-mobile li a').click(function() {
    $('.menu-mobile').toggleClass('hide');
    event.preventDefault();
});

/*  Scroll reveal initialisation */
window.sr = ScrollReveal({reset:true});
   sr.reveal('.card-about');
   sr.reveal('.team-card');

/* Other initialisation */
$('.scrollspy').scrollSpy(); //scrollspy
    

 /* Fixed Navbar */
 $(window).bind('scroll', function() {
  var navHeight = $( window ).height() - 40;
     if ($(window).scrollTop() > navHeight) {
        $('nav').addClass('fixed');
      }
     else {
        $('nav').removeClass('fixed');
       }
 });

      /* Smooth Scroll */
      $(function() {
	             $('a[href*=#]:not([href=#])').click(function() {
	                 if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	                           var target = $(this.hash);
	                               target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	                                   if (target.length) {
	                                       $('html,body').animate({
	                                       scrollTop: target.offset(80).top
	                                           }, 1000);
	                                       return false;
	                                       }
	                                   }
	                               });
	                           });