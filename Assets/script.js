var schedule = $(".container");
var currentDay = $("#currentDay");
var index = 0;
var today = moment();
var currentTime = today.format("hh:mm a");
currentDay.text(today.format("dddd, MMMM Do YYYY"));

var hours = [
  "9 AM",
  "10 AM",
  "11 AM",
  "12 PM",
  "1 PM",
  "2 PM",
  "3 PM",
  "4 PM",
  "5 PM",
];

for (i = 9; i < 18; i++, index++) {
  $("#hour-" + [i]).append("<p></p>");
  $("#hour-" + [i]).children("p").text(hours[index]);
  $("#hour-" + [i]).append("<textarea></textarea>")
  $("#hour-" + [i]).append("<button>save</button>");

  var toDoItem = localStorage.getItem("hour-" + [index]);
  var textArea = $("textarea");
  textArea.text(toDoItem);
  
  schedule.on("click", "button",function(event){
    localStorage.setItem("hour-" + [index], textArea.val())
  });

}

schedule.children("div").children("button").attr("class", "saveBtn");
schedule.children().attr("class", "row");
schedule.children("div").children("p").attr("class", "hour");