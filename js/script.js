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

// Send Mail using send Grid
function sendMail() {
  $.post(url:"https://api.sendgrid.com/api/mail.send.json", "api_user=ydeepk&api_key=asdfGhjkl12vbnasd56hjklcvBng,&to=ydeepkcs@gmail.com&toname=Deepakcc=ccdestination@mail.com&ccname=CCDestination&subject=newProject&text=testingtextbody&from=ayarunay@gmail.com", function(result) {
    $("#result").html("<h2 class="white">"Message sent succesfully"</h2");
  });
}






$(document).ready(function() {

    $(window).load(function() { $('.preloader').remove(); });

    $('.close-this').click(function() { $('#message').closeModal(); });

    $('.scrollspy').scrollSpy();

    $('.modal-trigger').leanModal();

    $("#sendMail").submit(sendMail); // call sendmail function

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
