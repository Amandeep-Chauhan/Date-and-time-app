// dark mode button
let darkModeBtn = document.querySelector(".dark-mode");
let bodyColor = document.querySelector(".body-color");
darkModeBtn.addEventListener("click", function () {
  bodyColor.classList.toggle("body");
});

// TIME
function tarik() {
  let newDate = new Date();
  console.log(newDate);

  let dayName = ["sun", "mon", "tues", "wed", "thru", "fri", "sat"];
  let dayCounter = newDate.getDay();
  let day = dayName[dayCounter];
  document.getElementById("day").innerHTML = day;

  let date = newDate.getDate();
  document.getElementById("date").innerHTML = date;

  let monthName = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "augut",
    "eptember",
    "october",
    "november",
    "december",
  ];
  let monthCounter = newDate.getMonth();
  let mnt = monthName[monthCounter];
  document.getElementById("mnt").innerHTML = mnt;

  let yr = newDate.getFullYear();
  document.getElementById("yr").innerHTML = yr;

  let roundOf = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
  ];
  let roundCounter = newDate.getHours();
  let hr = roundOf[roundCounter];
  document.getElementById("hr").innerHTML = hr;

  let min = newDate.getMinutes();
  document.getElementById("min").innerHTML = min;

  let ce = newDate.getSeconds();
  document.getElementById("sec").innerHTML = ce;

  let ms = newDate.getMilliseconds();
  document.getElementById("ms").innerHTML = ms;
}
setInterval(tarik, 100);

// stopwatch
var startTimerButton = document.querySelector(".startTimer");
var pauseTimerButton = document.querySelector(".pauseTimer");
var timerDisplay = document.querySelector(".timertime");
var startTime;
var updatedTime;
var difference;
var tInterval;
var savedTime;
var paused = 0;
var running = 0;

function startTimer() {
  if (!running) {
    startTime = new Date().getTime();
    tInterval = setInterval(getShowTime, 1);
    paused = 0;
    running = 1;
  }
}

function pauseTimer() {
  if (!difference) {
  } else if (!paused) {
    clearInterval(tInterval);
    savedTime = difference;
    paused = 1;
    running = 0;
  } else {
    startTimer();
  }
}

function resetTimer() {
  clearInterval(tInterval);
  savedTime = 0;
  difference = 0;
  paused = 0;
  running = 0;
  timerDisplay.innerHTML = "STOPWATCH!";
}

function getShowTime() {
  updatedTime = new Date().getTime();
  if (savedTime) {
    difference = updatedTime - startTime + savedTime;
  } else {
    difference = updatedTime - startTime;
  }
  var hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((difference % (1000 * 60)) / 1000);
  var milliseconds = Math.floor((difference % (1000 * 60)) / 100);

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  milliseconds =
    milliseconds < 100
      ? milliseconds < 10
        ? "00" + milliseconds
        : "0" + milliseconds
      : milliseconds;
  timerDisplay.innerHTML =
    hours + ":" + minutes + ":" + seconds + ":" + milliseconds;
}
