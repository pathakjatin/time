console.log("Clock by JS");
"use strict"
// function displayYear() {
//     var y = new Date();
//     document.getElementsByClassName("year")[0].innerHTML += y.getFullYear();
// }
// function displayMonth(){
//     var m = new Date();
//     document.querySelector(".month").innerHTML += m.getMonth() + "/"
// }
function displayCurrTime() {
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();

    // Increment seconds and adjust minutes and hours if needed
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
            if (hours >= 24) {
                hours = 0;
            }
        }
    }

    // Format time components with leading zeros if necessary
    var formattedHours = (hours < 10) ? "0" + hours : hours;
    var formattedMinutes = (minutes < 10) ? "0" + minutes : minutes;
    var formattedSeconds = (seconds < 10) ? "0" + seconds : seconds;

    // Construct the time string
    var timeString = formattedHours + ":" + formattedMinutes + ":" + formattedSeconds;

    // Update HTML content
    document.querySelector(".ms").innerHTML = timeString;
}

function main() {
    // displayYear();
    // displayMonth();
    setInterval(displayCurrTime, 1000);
}
main();
