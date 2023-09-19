const formTimer = document.querySelector(".form-timer");

let hour = formTimer.querySelector(".inp-hour");
let min = formTimer.querySelector(".inp-min");
let sec = formTimer.querySelector(".inp-sec");

let timer;

function startTimer() {
  timer = setInterval(countTimer, 1000);
}

function countTimer() {
  if (sec.value != 0) {
    sec.value--;
  } else {
    if (min.value != 0) {
      min.value--;
      sec.value = 59;
    } else {
      if (hour.value != 0) {
        hour.value--;
        min.value = 59;
      } else {
        clearTimer(timer);
      }
    }
  }
}

function clearTimer(timer) {
  clearInterval(timer);
  alert("time out");
}
