// VARIABLES //


//create new variables for time slots using their respective HTML id
var hour9 = $('#hour9').text();
var hour10 = $('#hour10').text();
var hour11 = $('#hour11').text();
var hour12 = $('#hour12').text();
var hour1 = $('#hour1').text();
var hour2 = $('#hour2').text();
var hour3 = $('#hour3').text();
var hour4 = $('#hour4').text();
var hour5 = $('#hour5').text();

// capture and save event data for and into the local storage upon clicking save
$('#btn9').on('click', function() {
    // check the textbox for data
    if ($('#text9').val()) {
        //clear the storage if empty
        localStorage.removeItem('text9');
    }
    //create a variable for this specific hour of the day
    var hourNine = JSON.stringify(hour9);

    //store data in the local storage
    localStorage.setItem(hour9, $('#text9'.val()));
    });

// create variables for a certain hour 
var ninthHour = JSON.stringify(hour9);

//save data to local storage
localStorage.setItem(hour9, $('#text9').val());

//repeat for all variables (consicely)
$('#btn10').on('click', function() {
    if ($('#text10').val()) {
        localStorage.removeItem('text10');
    }
    var tenthHour = JSON.stringify(hour10);
    localStorage.setItem(hour10, $('#text10').val());
});

$('#btn10').on('click', function() {
    if ($('#text10').val()) {
        localStorage.removeItem('text10');
    }
    var tenthHour = JSON.stringify(hour10);
    localStorage.setItem(hour10, $('#text10').val());
});

$('#btn11').on('click', function() {
    if ($('#text11').val()) {
        localStorage.removeItem('text11');
    }
    var tenthHour = JSON.stringify(hour10);
    localStorage.setItem(hour10, $('#text11').val());
});

$('#btn12').on('click', function() {
    if ($('#text12').val()) {
        localStorage.removeItem('text12');
    }
    var tenthHour = JSON.stringify(hour12);
    localStorage.setItem(hour10, $('#text12').val());
});

$('#btn1').on('click', function() {
    if ($('#text1').val()) {
        localStorage.removeItem('text1');
    }
    var tenthHour = JSON.stringify(hour10);
    localStorage.setItem(hour10, $('#text1').val());
});

$('#btn2').on('click', function() {
    if ($('#text2').val()) {
        localStorage.removeItem('text2');
    }
    var tenthHour = JSON.stringify(hour10);
    localStorage.setItem(hour10, $('#text2').val());
});

$('#btn3').on('click', function() {
    if ($('#text3').val()) {
        localStorage.removeItem('text3');
    }
    var tenthHour = JSON.stringify(hour10);
    localStorage.setItem(hour10, $('#text3').val());
});

$('#btn4').on('click', function() {
    if ($('#text4').val()) {
        localStorage.removeItem('text4');
    }
    var tenthHour = JSON.stringify(hour10);
    localStorage.setItem(hour10, $('#text4').val());
});

$('#btn5').on('click', function() {
    if ($('#text5').val()) {
        localStorage.removeItem('text5');
    }
    var tenthHour = JSON.stringify(hour10);
    localStorage.setItem(hour10, $('#text5').val());
});

// TIME //





//display time & date on in jumbotron

// create class and an if statement based on time of day for class assignment