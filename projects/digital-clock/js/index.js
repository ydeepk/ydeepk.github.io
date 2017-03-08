/*
app name : Ruo ( Random Quotes Generator )
author : ydeepk | ydeepkcs@gmail.com
Framework : Google Materialize
Liscense : MIT (Open Source)
Purpose : Learning Basics of jQuery, Materialize CSS Framework, Twitter API ( Part of  Freecodecamp exercise )
Description: Build a Random Quotes generator which can Generate Random Quotes, a next button to Generate Random Quotes and finally it should be able to tweet this with a click of a button.

Further :
1. Serve Different Categories of Random Quotes through  filter menu / button.
2. Search Random quotes ( Keywords Perosnalities , or any situation etc ... ).
3. Save Fav Quotes, have a personal profile on RUO.
4. Make cross Platform APP, and provide unique set of features.
*/
var quotes = '',
    author = '',
    $quote = $('.quotes'),
    $author = $('.author'),
    $next = $('.next'),
    $share = $('.share');

function randomQuote() {
    $.ajax({
        headers: {
            "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded"
        },
        url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
        success: function(response) {
            var data = JSON.parse(response);
            quotes = data.quote;
            author = data.author;
            $share.click(function() {
                window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent('" ' + quotes + ' " ' + " -" + author));
            });
            $quote.text(quotes);
            $author.text(author);
            $quote.removeClass('hide');
            $author.removeClass('hide');
            $next.removeClass('disabled');
            $('.not-interested, .preloader').addClass('hide');
        }
    });
}

$(document).ready(function() {
    randomQuote();
    $('.next').on('click', function() {
        $('.quotes, .author').addClass('hide');
        $('.next').addClass('disabled');
        $('.not-interested, .preloader').removeClass('hide');
        randomQuote();
    });
});
