
    
    $(window).scroll(function() {
    var scroll = $(window).scrollTop();
        
        if(scroll>=20) {
            $('.move-navbar').addClass('hide');
            $('.navbar-fixed').removeClass('hide');
        } else {
            $('.navbar-fixed').addClass('hide');
            $('.move-navbar').removeClass('hide');
        }
});


    


$(document).ready();