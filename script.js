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





}