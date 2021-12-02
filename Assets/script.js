var schedule = $(".containter");
var currentDay = $("#currentDay");
var index = 0;
var today = moment();
var hour = today.format("hh:mm a");
currentDay.text(today.format("dddd, MMMM Do YYYY"));

var hours = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00PM",
  "5:00 PM",
];

for (i = 9; i < 18; i++, index++) {
  $("#hour-" + [i]).text(hours[index]);
  $("#hour-" + [i]).append("<textarea></textarea>");
  $("#hour-" + [i]).append("<button></button>");

  

  var eventsByHour = localStorage.getItem("hour-" + i);
}

schedule.on("click", "saveBtn", function (event) {});
