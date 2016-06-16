/* display info window*/
$('.about').click(function() {
    $('.about-info').toggleClass('hide');
});
$('.work').click(function() {
    $('.work-info').toggleClass('hide');
});
$('.contact').click(function() {
    $('.contact-info').toggleClass('hide');
});
$('.present').click(function() {
    $('.present-info').toggleClass('hide');
});
$('.blog').click(function() {
    $('.blog[href^="http://"]').attr("target","_blank");
});
/*close window*/
$('.close-about').click(function() {
    $('.about-info').toggleClass('hide');
});
$('.close-work').click(function() {
    $('.work-info').toggleClass('hide');
});
$('.close-contact').click(function() {
    $('.contact-info').toggleClass('hide');
});
$('.close-present').click(function() {
    $('.present-info').toggleClass('hide');
});