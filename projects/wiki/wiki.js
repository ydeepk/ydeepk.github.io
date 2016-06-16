// Variables at Play
// none


// Give me some Action
$('.alert-close').click(function() {    // remove Alert
    $('.alert').remove();
});

$('.result-container-close').click(function() {    // remove Result
    $('.result-container').remove();
    // Refersh Web Page
    refreshPage();
});

$('.result-container-close').hide(); // hide clear button




// Need some Functionality
function searchWiki() {  // search function
    var find = $('input[type="text"]').val(); // Hold Search Input

    alertMsg(find);

    var url = 'https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch='+find+'&format=json&callback=?'; // WIKI API URL

    $.ajax({  // load Data
        url: url,
        dataType: 'json',
        success: function(json) {
            
            $('.preloader').remove(); // Remove Preloader
            
            $('.result-container-close').show(); // Show Clear Result
            
            $('.result-container').removeClass('hidden'); // display Result Container
            
            var data = json.query;
            
            for(var i = 0; i < data.search.length; i++) {
                $('.result-container').append('<div class="col-xs-12 result white-bg text-right light-grey-bg"><h3 class="title-wiki text-left text-blue raleway">'+data.search[i].title+'</h3><h4 class="snippet-wiki text-left text-blue-grey lato">'+data.search[i].snippet+'</h4><a href="https://en.wikipedia.org/wiki/'+data.search[i].title+'" class="read-btn btn btn-large" target="_blank">Read This</a></div>');

            }
        }
    });
}

function randomWiki() { // Random function
    window.location.href = "https://en.wikipedia.org/wiki/Special:Random"; // redirect
}

function refreshPage() {
    window.location.href="../index.html"; // Self Redirect
}

function alertMsg(find) {
    $('.alert').removeClass('hidden'); // Display Search Alert
    $('.search-value').append(find); // Push Search value in ALert
    $('.alert').addClass('animated rubberBand');
}

var main = function() { // Main function
    $('.random-btn').click(randomWiki); //load Random Wikipedia

    $('input[type="text"]').keypress(function(e) { // Submit Search Input value
        if(e.which==13) {
            $('input[type="text"]').submit();
            
            $('.preloader').removeClass('hidden');
            $('.preloader h3').addClass('animated lightSpeedIn cust-ani infinite');
            
            searchWiki(); // Call Search wiki
        }
    });

    $('.search-btn').click(function() { // Submit input on Click
        $('input[type="text"]').submit();
        
        $('.preloader').removeClass('hidden');
        $('.preloader h3').addClass('animated lightSpeedIn cust-ani infinite');
        
        searchWiki();
    });
}


// Do it, when Ready
$(document).ready(main);


// WIKI API REFERENCE

// https://en.wikipedia.org/wiki/Special:Random
// https://www.mediawiki.org/wiki/API:Main_page
// http://en.wikipedia.org/w/api.php?action=query&generator=random&grnnamespace=0&prop=extracts&exchars=500&format=json
