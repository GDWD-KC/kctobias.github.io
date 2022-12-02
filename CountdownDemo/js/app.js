//Conversions for Timing
function convertToDaysLeft(milliseconds) {
    return Math.floor(milliseconds / (1000 * 60 * 60 * 24));
  }

function convertToHoursLeft(milliseconds) {
    return Math.floor(
      (milliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
  }

function convertToMinutesLeft(milliseconds) {
    return Math.floor(
      (milliseconds % (1000 * 60 * 60)) / (1000 * 60)
    );
  }

function convertToSecondsLeft(milliseconds) {
    return Math.floor(
      (milliseconds % (1000 * 60)) / 1000
    );
  }

function formatCountdownText(days, hours, minutes, seconds) {
    return `${days}d ${hours}h ${minutes}m ${seconds}s left`;
  }

//Initialize Deadline Variable
let deadline = new Date ("January 1, 2023 12:00:00");

//Initialize the variable for the element used for the countdown
let countdown = document.getElementById("countdown");
//Get rid of Content Text in countdown element
countdown.innerHTML = " ";

//Function to Set Countdown
function setCountdown() {
    //Current Date 
    let now = new Date();
    let timeLeft = deadline.getTime() - now.getTime();

    //Store time converted variables in another variable to use in final display
    let daysLeft = convertToDaysLeft(timeLeft);
    let hoursLeft = convertToHoursLeft(timeLeft);
    let minutesLeft = convertToMinutesLeft(timeLeft);
    let secondsLeft = convertToSecondsLeft(timeLeft);

    countdown.innerHTML = formatCountdownText (daysLeft, hoursLeft, minutesLeft, secondsLeft);
}

setInterval(setCountdown, 1000)




