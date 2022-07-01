// Change input color based on current time
var presentHour = moment().hour();
var userResponse = $(".row input[type=text]");

$(userResponse).each(function() {
       
    var userResponse = parseInt($(this).attr("data-hour"));
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

