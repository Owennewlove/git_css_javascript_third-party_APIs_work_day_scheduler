


var timeBlocksArr = [9, 10, 11, 12, 13, 14, 15, 16, 17]

var currentHour = moment().hour()

var currentDay = $("#currentDay")
console.log(currentHour)

var systemTime = moment().format("dddd, MMMM Do YYYY")
currentDay.text(systemTime)


var Text9am = $("#9")
var Text10am = $("#10")
var Text11am = $("#11")
var Text12pm = $("#12")
var Text1pm = $("#13")
var Text2pm = $("#14")
var Text3pm = $("#15")
var Text4pm = $("#16")
var Text5pm = $("#17")

var events9am = [];
var events10am = [];
var events11am = [];
var events12pm = [];
var events1pm = [];
var events2pm = [];
var events3pm = [];
var events4pm = [];
var events5pm = [];


function displayTimeBlockColors() {

    for (var i = 0; i < timeBlocksArr.length; i++) {
        var currentTextEl = $("#" + timeBlocksArr[i])

        if (currentHour > timeBlocksArr[i]) {

            currentTextEl.addClass("past")

        }
        else if (currentHour === timeBlocksArr[i]) {

            currentTextEl.addClass("present")
        }
        else {
            currentTextEl.addClass("future")
        }
    }

}

displayTimeBlockColors()


function renderEvents() {


    // Render a text for each hours textarea
    for (var i = 0; i < events9am.length; i++) {
        var events = events9am[i];
        Text9am.val(events)

    }

    for (var i = 0; i < events10am.length; i++) {
        var events = events10am[i];
        Text10am.val(events)

    }
    for (var i = 0; i < events11am.length; i++) {
        var events = events11am[i];
        Text11am.val(events)

    }
    for (var i = 0; i < events12pm.length; i++) {
        var events = events12pm[i];
        Text12pm.val(events)

    }
    for (var i = 0; i < events1pm.length; i++) {
        var events = events1pm[i];
        Text1pm.val(events)

    }
    for (var i = 0; i < events2pm.length; i++) {
        var events = events2pm[i];
        Text2pm.val(events)

    }
    for (var i = 0; i < events3pm.length; i++) {
        var events = events3pm[i];
        Text3pm.val(events)

    }
    for (var i = 0; i < events4pm.length; i++) {
        var events = events4pm[i];
        Text4pm.val(events)

    }
    for (var i = 0; i < events5pm.length; i++) {
        var events = events5pm[i];
        Text5pm.val(events)

    }

    

}

function init() {
    // Get events scores from localStorage
    var storedEvents9am = JSON.parse(localStorage.getItem("events9am"));
    var storedEvents10am = JSON.parse(localStorage.getItem("events10am"));
    var storedEvents11am = JSON.parse(localStorage.getItem("events11am"));
    var storedEvents12pm = JSON.parse(localStorage.getItem("events12pm"));
    var storedEvents1pm = JSON.parse(localStorage.getItem("events1pm"));
    var storedEvents2pm = JSON.parse(localStorage.getItem("events2pm"));
    var storedEvents3pm = JSON.parse(localStorage.getItem("events3pm"));
    var storedEvents4pm = JSON.parse(localStorage.getItem("events4pm"));
    var storedEvents5pm = JSON.parse(localStorage.getItem("events5pm"));

    // If events were retrieved from localStorage, update the scores array to it
    if (storedEvents9am !== null) {
        events9am = storedEvents9am;
    }
    if (storedEvents10am !== null) {
        events10am = storedEvents10am;
    }
    if (storedEvents11am !== null) {
        events11am = storedEvents11am;
    }
    if (storedEvents12pm !== null) {
        events12pm = storedEvents12pm;
    }
    if (storedEvents1pm !== null) {
        events1pm = storedEvents1pm;
    }
    if (storedEvents2pm !== null) {
        events2pm = storedEvents2pm;
    }
    if (storedEvents3pm !== null) {
        events3pm = storedEvents3pm;
    }
    if (storedEvents4pm !== null) {
        events4pm = storedEvents4pm;
    }
    if (storedEvents5pm !== null) {
        events5pm = storedEvents5pm;
    }

    renderEvents();
}

function storeEvents() {
    localStorage.setItem("events9am", JSON.stringify(events9am));
    localStorage.setItem("events10am", JSON.stringify(events10am));
    localStorage.setItem("events11am", JSON.stringify(events11am));
    localStorage.setItem("events12pm", JSON.stringify(events12pm));
    localStorage.setItem("events1pm", JSON.stringify(events1pm));
    localStorage.setItem("events2pm", JSON.stringify(events2pm));
    localStorage.setItem("events3pm", JSON.stringify(events3pm));
    localStorage.setItem("events4pm", JSON.stringify(events4pm));
    localStorage.setItem("events5pm", JSON.stringify(events5pm));
}




$("#saveBtn1").on("click", function () {
    console.log("clicked")

    var textFor9 = Text9am.val().trim();
    if (textFor9 === "") {
        return;
    }

    events9am.push(textFor9)

    storeEvents();
    renderEvents();
    console.log(events9am)



    

});

$("#saveBtn2").on("click", function () {
    console.log("clicked")

    var textFor10 = Text10am.val().trim();
    if (textFor10 === "") {
        return;
    }

    events10am.push(textFor10)

    storeEvents();
    renderEvents();
    console.log(events10am)



    

});

$("#saveBtn3").on("click", function () {
    console.log("clicked")

    var textFor11 = Text11am.val().trim();
    if (textFor11 === "") {
        return;
    }

    events11am.push(textFor11)

    storeEvents();
    renderEvents();
    console.log(events11am)



    

});

$("#saveBtn4").on("click", function () {
    console.log("clicked")

    var textFor12 = Text12pm.val().trim();
    if (textFor12 === "") {
        return;
    }

    events12pm.push(textFor12)

    storeEvents();
    renderEvents();
    console.log(events12pm)



    

});

$("#saveBtn5").on("click", function () {
    console.log("clicked")

    var textFor1 = Text1pm.val().trim();
    if (textFor1 === "") {
        return;
    }

    events1pm.push(textFor1)

    storeEvents();
    renderEvents();
    console.log(events1pm)



    

});

$("#saveBtn6").on("click", function () {
    console.log("clicked")

    var textFor2 = Text2pm.val().trim();
    if (textFor2 === "") {
        return;
    }

    events2pm.push(textFor2)

    storeEvents();
    renderEvents();
    console.log(events2pm)



    

});

$("#saveBtn7").on("click", function () {
    console.log("clicked")

    var textFor3 = Text3pm.val().trim();
    if (textFor3 === "") {
        return;
    }

    events3pm.push(textFor3)

    storeEvents();
    renderEvents();
    console.log(events3pm)



    

});

$("#saveBtn8").on("click", function () {
    console.log("clicked")

    var textFor4 = Text4pm.val().trim();
    if (textFor4 === "") {
        return;
    }

    events4pm.push(textFor4)

    storeEvents();
    renderEvents();
    console.log(events4pm)



    

});

$("#saveBtn9").on("click", function () {
    console.log("clicked")

    var textFor5 = Text5pm.val().trim();
    if (textFor5 === "") {
        return;
    }

    events5pm.push(textFor5)

    storeEvents();
    renderEvents();
    console.log(events5pm)



    

});

init();