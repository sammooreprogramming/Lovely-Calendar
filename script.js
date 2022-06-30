//show the current date/time
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

$(document).ready(function() {

    $(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // store the text items in the local storage
    localStorage.setItem(time, text);
    })

    function hourTracker() {
        var currentTime = moment().hour();
    
    // A loop through the time blocks
    $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split("hour")[1]);
    
    //  if/else/else if statement is used to determine which class is given according to time of day
    if (blockHour < currentTime) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
        }
    else if (blockHour === currentTime) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
        }
    else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
        }
    })
  }

     // retrieve any saved data from localStorage
     $("#hour9.description").val(localStorage.getItem(hour9));
     $("#hour10.description").val(localStorage.getItem(hour10));
     $("#hour11.description").val(localStorage.getItem(hour11));
     $("#hour12.description").val(localStorage.getItem(hour12));
     $("#hour1.description").val(localStorage.getItem(hour1));
     $("#hour2.description").val(localStorage.getItem(hour2));
     $("#hour3.description").val(localStorage.getItem(hour3));
     $("#hour4.description").val(localStorage.getItem(hour4));
     $("#hour5.description").val(localStorage.getItem(hour5));

    hourTracker();
})