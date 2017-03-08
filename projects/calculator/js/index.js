// JACAL "the Javascript Calculator"


/*

  # version: v0.1
  # author: Deepak Yadav | web: https://ydeepk.github.io
  # License: GNU
  # strarted on 8th Feb

*/


// variables
var cur_mode = "Std.",
    input_holder = '',
    cur_ans = 0;


// mode function for selecting three different modes = Std./Scientific/Programable
function set_mode(new_mode) {
    var modes = ["Std.", "Scientific", "Programable"];
    for (var y = 0; y < modes.length; y++) {
        modes[y] = set_mode;
    }
    return modes;
}


// display screen
function display(mode, holder, curans) {
    var disp_mode = document.getElementById('curr-mode'),
        disp_holder = document.getElementById('input-holder'),
        disp_cur_ans = document.getElementById('cur-ans');

    disp_mode.innerHTML = mode; // current mode
    disp_holder.innerHTML = holder; // value holder
    disp_cur_ans.innerHTML = curans; // current or answer;
}


// clear
function clrCal() {
    curr_mode = "Std.";
    input_holder = '';
    cur_ans = 0;
    // after reset , call display
    display(cur_mode, input_holder, cur_ans);
    return;
}

// https://www.youtube.com/watch?v=Wr4v1wFS_OY


// process clicks
function process(key) {

    if (key === 'clr') {
        clrCal();
        return;
    }

    if (key !== '=' && key !== '*' && key !== '/' && key !== '+' && key !== '-' && key !== '.') {
        input_holder += key;
        // handling stucking 0 and breaking issue of current input
        if (cur_ans == 0) {
            cur_ans = key;
        } else {
            cur_ans += key;
        }
        display(cur_mode, input_holder, cur_ans);
        return;
    }

    if (key !== '=' && [key == '*' || key == '/' || key == '+' || key == '-' || key !== '.']) {
        input_holder += key;
        //always make cur_ans = 0 for operators
        cur_ans = 0;
        display(cur_mode, input_holder, cur_ans);
        return;
    }

    if (key == '=' && key !== '*' && key !== '/' && key !== '+' && key !== '-' && key !== '.') {
        cur_ans = eval(input_holder);
        display(cur_mode, input_holder, cur_ans);
        // handle the BODMAS rule error
        // if want to use answer directly in next equation or problem
        input_holder = cur_ans;
        //set_4_nxt_input(cur_ans);
        return;
    }

}

// Register clicks
var elements = document.getElementsByClassName('buttons');
// run through every buttons clicks
for (var x = 0; x < elements.length; x++) {
    // listen for clicks
    elements[x].addEventListener('click', function(eventBy) {
        var key_pressed = eventBy.target.id;
        // process key
        process(key_pressed);
    });
}


// Start the calc
display(cur_mode, input_holder, cur_ans);
