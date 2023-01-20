const time = document.querySelector(".time");
const init = document.querySelector("#init");
const stop = document.querySelector("#stop");
const reset = document.querySelector("#reset");

init.addEventListener("click", initCronometer);
stop.addEventListener("click", stopCronometer);
reset.addEventListener("click", resetCronometer);

let hours = 0;
let minutes = 0;
let seconds = 0;
let timer;

time.innerText = "00:00:00";

function initCronometer() {
  init.setAttribute("disabled", "");
  timer = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      minutes++;
      seconds = 0;
    }
    if (minutes === 60) {
      hours++;
      minutes = 0;
    }
    time.innerText = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(
      seconds
    )}`;
  }, 1000);
}

function stopCronometer() {
  clearInterval(timer);
  init.removeAttribute("disabled");
}

function resetCronometer() {
  hours = 0;
  minutes = 0;
  seconds = 0;
  time.innerText = "00:00:00";
}

function formatTime(n) {
  return n >= 10 ? n : `0${n}`;
}
