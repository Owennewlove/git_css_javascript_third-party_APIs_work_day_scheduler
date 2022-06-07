


var timeBlocksArr = [9, 10, 11, 12, 13, 14, 15, 16, 17]

var currentHour = moment().hour()

var currentDay = $("#currentDay")
console.log(currentHour)

var systemTime = moment().format("dddd, MMMM Do YYYY")
currentDay.text(systemTime)


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