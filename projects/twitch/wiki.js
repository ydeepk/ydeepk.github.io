// variables at play
var logo, name, text, viewers, urlStream;
var state = "";
var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

// lets be functional.

function userData(users) { // Bring me status ( online / offline ) & related info about users
    var state = "";
    for (var i = 0; i < users.length; i++) {
        // gets status of users
        $.ajax({
            url: "https://api.twitch.tv/kraken/streams/" + users[i],
            dataType: 'json',
            success: function(data) {
                if (data.stream == null) {
                    state = "offline";
                } else {
                    state = "online";
                }
            }
        });

        // Gets data of users like name, logo , url etc.
        $.ajax({
            url: "https://api.twitch.tv/kraken/channels/" + users[i],
            dataType: 'json',
            success: function(data) {
                // get Status & add to the result
                logo = data.logo;
                name = data.name;
                urlStream = data.url;
                viewers = data.views;
                game = data.game;


                if (state == "offline") {
                    $('.twitch-users-offline-container').append('<div class="row gap"><div class="col-xs-12"><div class="row"><div class="col-xs-3 text-center"><img src="' + logo + '" class="streamer-img img-thumbnail"><h4 class="text-white raleway streamer-name">' + name + '</h4></div><div class="col-xs-8 description-container text-center"><h2 class="text-white"><i class="fa fa-eye-slash fa-2x"></i></h2></div></div></div></div>');
                } else {
                    $('.twitch-users-online-container').append('<div class="row gap"><div class="col-xs-12"><div class="row"><div class="col-xs-3 text-center"><img src="' + logo + '" alt="" class="stream-img img-thumbnail"><h4 class="text-white raleway streamer-name">' + name + '</h4></div><div class="col-xs-8 description-container text-center"><h4 class="text-white description">' + game + '</h4><h2 class="text-right"><a href="' + urlStream + '"><i class="fa fa-play fa-2x text-white"></i></a></h2><h5 class="text-white"><i class="fa fa-eye fa-2x"></i> <span class="viewer-number">' + viewers + '</span></h5></div></div></div>');
                }
            }
        });
    }
}

function findUser() {
    $('.twitch-users-offline-container').addClass('hidden');
    $('.twitch-users-online-container').addClass('hidden');
    var find = $('input[type="text"]').val();

    // Search users function
    $.ajax({
        url: "https://api.twitch.tv/kraken/search/channels?q=" + find,
        dataType: 'JSON',
        success: function(data) {
            for (var i = 0; i < data.channels.length; i++) {
                $('.twitch-users-search-container').append('<div class="row gap"><div class="col-xs-12"><div class="row"><div class="col-xs-3 text-center"><img src="' + data.channels[i].logo + '" alt="" class="stream-img img-thumbnail"><h4 class="text-white raleway streamer-name">' + data.channels[i].display_name + '</h4></div><div class="col-xs-8 description-container text-center"><h4 class="text-white description"></h4><h2 class="text-right"><a href="' + data.channels[i].url + '"><i class="fa fa-play fa-2x text-white"></i></a></h2><h5 class="text-white"><i class="fa fa-eye fa-2x"></i> <span class="viewer-number">' + data.channels[i].views + '</span></h5></div></div></div>');
            }
        }
    });
}


function displayAll() {
    $('#all').prop('checked', true);
    $('#online,#offline').removeProp('checked');
    $('.twitch-users-online-container').removeClass('hidden');
    $('.twitch-users-offline-container').removeClass('hidden');
}

function displayOnline() {
    $('.twitch-users-offline-container').addClass('hidden');
    $('.twitch-users-online-container').removeClass('hidden');
}

function displayOffline() {
    $('.twitch-users-offline-container').removeClass('hidden');
    $('.twitch-users-online-container').addClass('hidden');
}

var main = function() {
    // give me some action
    $('.fa-close').hide(); // hides close btn

    $('.fa-search').click(function() { // display search bar
        $('.search').css({
            "margin-left": "0%",
            "width": "80%"
        });
        $('.fa-search').css({
            "position": "relative",
            "margin-left": "0%",
            "margin-top": "0px"
        });
        $('.fa-close').show();
        $('.search,.fa-search,.fa-close').addClass('animated fadeIn');
    });

    $('.fa-close').click(function() { // hide search bar
        $('.search').css({
            "margin-left": "90%",
            "width": "0%"
        });

        $('.fa-search').css({
            "position": "absolute",
            "margin-left": "75%",
            "margin-top": "15px"
        });
        $('.fa-close').hide();
        $('.search,.fa-search,.fa-close').removeClass('animated wobble');
    });

    $('input[type="text"]').keypress(function(e) { // Submit Search Input value
        if (e.which == 13) {
            $('input[type="text"]').submit();
            findUser(); // Call Search channels
        }
    });

    $('input[type="radio"]').click(function() { // select options b/w all, online, offline.
        $('input[type="radio"]').change(function(twitchUsers) {
            var value = $(this).val();

            switch (value) {
                case 'all':
                    $(this).prop('checked', true);
                    $('#online,#offline').removeProp('checked');
                    displayAll();
                    break;

                case 'online':
                    $(this).prop('checked', true);
                    $('#all, #offline').removeProp('checked');
                    displayOnline();
                    break;

                case 'offline':
                    $(this).prop('checked', true);
                    $('#online,#all').removeProp('checked');
                    displayOffline();
                    break;
            }
        });
    });

    displayAll(); // initial calling
    userData(users); // Call users data

}


// do it, when ready.
$(document).ready(main);
