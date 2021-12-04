// sets current date
$("#currentDay").text(moment().format("dddd, MMM Do YYYY"));

// creates click function for each button
// takes value from sibling and saves under value to local storage
// takes attribute id from parent and saves under key to local storage
$(".saveBtn").on("click", function () {
  var value = $(this).siblings(".description").val();
  var key = $(this).parent().attr("id");

  localStorage.setItem(key, value);
});

function hourFormat() {
// pulling current hour using moment
  var currentHour = moment().hours();

  //creates loop for each element with class "time-block"
  $(".time-block").each(function () {
  // converts each element id into a number
    var rowHour = parseInt($(this).attr("id"));
    
//compares current hour to schedule hours and adds class depending on if it is past, present or future
    if (currentHour > rowHour) {
      $(this).addClass("past");
    } else if(currentHour === rowHour){
      $(this).removeClass("past");
      $(this).addClass("present");
    } else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });
}


hourFormat();

//grabs items from local storage and displays them in the correct time slot
$("#9 .description").text(localStorage.getItem("9"));
$("#9 .description").text(localStorage.getItem("9"));
$("#9 .description").text(localStorage.getItem("9"));
$("#9 .description").text(localStorage.getItem("9"));
$("#9 .description").text(localStorage.getItem("9"));
$("#9 .description").text(localStorage.getItem("9"));
$("#9 .description").text(localStorage.getItem("9"));
$("#9 .description").text(localStorage.getItem("9"));
