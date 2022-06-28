$(document).ready(function() {
    // this shows the current time and the current date
    $("currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
    // Now to set up an event listener for user's input 
    $(".saveBtn").on ("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // store the items in the local storage
    localStorage.setItem(time, text);
})

    // 
    $("#hour9.description").val(localStorage.getItem(hour9));
    $("#hour10.description").val(localStorage.getItem(hour10));
    $("#hour11.description").val(localStorage.getItem(hour11));
    $("#hour12.description").val(localStorage.getItem(hour12));
    $("#hour1.description").val(localStorage.getItem(hour1));
    $("#hour2.description").val(localStorage.getItem(hour2));
    $("#hour3.description").val(localStorage.getItem(hour3));
    $("#hour4.description").val(localStorage.getItem(hour4));
    $("#hour5.description").val(localStorage.getItem(hour5));
}