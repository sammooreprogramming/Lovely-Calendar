
// Set current date in header
var time = moment();
$("#currentDay").text(time.format("dddd, MMMM Do"));

// Change input color based on the current hour
var presentHour = moment().hour();
var userResponse = $(".row input[type=text]");

$(userResponse).each(function() {
       
    let userResponse = parseInt($(this).attr("data-hour"));
    if (userResponse < presentHour) {
        $(this).addClass("past")
    }
    else if (userResponse === presentHour) {
        $(this).addClass("present")
    }
    else if (userResponse > presentHour) {
        $(this).addClass("future")
    }
});

// Store text entered into an input when clicking save button


// Displays events in local storage
displayEvents() || [];        
