$(document).ready(function(){
    // on load modal launch
    $(window).load(function() {
        $('.pre-loader').remove();
        $('#demoModal').modal('show');
    });
    
    // small device menu trigger
    $(".sm-menu").click(function() {
        $(".full-menu").toggleClass("invisible");
        $(".full-menu").css("transform","scale(1)");
        event.preventDefault();
    });

    $('.full-menu>li>a').click(function() {
		$('.full-menu').toggleClass("invisible");
         $(".full-menu").css("transform","scale(0)");
    });
    
});