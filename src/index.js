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

    // document.querySelector(".elapsedTime").innerHTML = currTime
    // setInterval(()=>{
    //     let start = document.querySelector(".start")
    //     start.addEventListener("click",()=>{
    //         var newSeconds = seconds - time.getSeconds() 
    //         var newMinutes = minutes - time.getMinutes() 
    //         var newHours = hours - time.getHours() 
    //         var updatedTime = newHours + ":" + newMinutes + ":" + newSeconds
            
    //         document.querySelector(".elapsedTime").innerHTML = updatedTime
    //     })
    // },1000)
    let timer = document.querySelector(".timer")
    let startTime = 0
    let elapsedTime = 0
    let timerInterval;
    function startTimer(){
        startTime = Date.now() - elapsedTime
        timerInterval = setInterval(()=>{
            elapsedTime = Date.now() - startTime
            timer.textContent = formattedTime(elapsedTime)
        },10);
    }
    function formattedTime(elapsedTime) {
        const milliseconds = Math.floor((elapsedTime % 1000) / 10);
        const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
        const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
        const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        return (
            (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
            ":" +
            (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
            ":" +
            (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") +
            "." +
            (milliseconds > 9 ? milliseconds : "0" + milliseconds)
        );
        }
    function pauseTimer(){
        clearInterval(timerInterval)
    }
    function resetTimer(){
        clearInterval(timerInterval)
        timer.textContent = "00:00:00:00"
    }
function main() {
    // displayYear();
    // displayMonth();
    setInterval(displayCurrTime, 1000);
    // setInterval(stopwatch,1000);
    document.querySelector(".start").addEventListener("click",startTimer)
    document.querySelector(".pause").addEventListener("click",pauseTimer)
    document.querySelector(".reset").addEventListener("click", resetTimer)
}
main();
