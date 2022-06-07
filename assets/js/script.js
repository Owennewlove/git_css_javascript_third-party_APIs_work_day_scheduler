


var currentHour = moment().hour()

var currentDay = $("#currentDay")
console.log(currentHour)

var systemTime = moment().format("dddd, MMMM Do YYYY")
currentDay.text(systemTime)