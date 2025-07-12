let hours = 0, minutes = 0, seconds = 0, milliseconds = 0;
let interval = null;

const display = document.getElementById("display");
const laps = document.getElementById("laps");

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("pause").addEventListener("click", pauseTimer);
document.getElementById("reset").addEventListener("click", resetTimer);
document.getElementById("lap").addEventListener("click", recordLap);

function updateDisplay() {
  let h = String(hours).padStart(2, '0');
  let m = String(minutes).padStart(2, '0');
  let s = String(seconds).padStart(2, '0');
  let ms = String(milliseconds).padStart(2, '0');
  display.innerText = `${h}:${m}:${s}:${ms}`;
}

function runStopwatch() {
  milliseconds++;
  if (milliseconds === 100) {
    milliseconds = 0;
    seconds++;
  }
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }
  updateDisplay();
}

function startTimer() {
  if (interval === null) {
    interval = setInterval(runStopwatch, 10);
  }
}

function pauseTimer() {
  clearInterval(interval);
  interval = null;
}

function resetTimer() {
  pauseTimer();
  hours = minutes = seconds = milliseconds = 0;
  updateDisplay();
  laps.innerHTML = "";
}

function recordLap() {
  if (interval !== null) {
    const lapTime = display.innerText;
    const li = document.createElement("li");
    li.textContent = lapTime;
    laps.appendChild(li);
  }
}
