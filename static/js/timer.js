const form = document.querySelector('#timer-form');
const hoursInput = document.querySelector('#hours');
const startButton = document.querySelector('#start-button');
const countdown = document.querySelector('#countdown');
const status = document.querySelector('#status');

let intervalId = null;
let targetTime = null;

function formatTime(totalSeconds) {
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  return `${String(h).padStart(3, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function tick() {
  // Calculate against the clock instead of subtracting one second per tick.
  // This keeps the countdown accurate if the browser tab is inactive.
  const remainingSeconds = Math.max(0, Math.ceil((targetTime - Date.now()) / 1000));
  countdown.textContent = formatTime(remainingSeconds);

  if (remainingSeconds === 0) {
    window.clearInterval(intervalId);
    intervalId = null;
    countdown.classList.add('finished');
    status.textContent = 'Time is up!';
    document.title = 'Time is up! | Golden Countdown';
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (targetTime !== null) return; // One start per page load.

  const hours = Number(hoursInput.value);
  if (!Number.isFinite(hours) || hours < 1 / 3600 || hours > 300) {
    status.textContent = 'Enter a duration between 1 second and 300 hours.';
    return;
  }

  const seconds = Math.round(hours * 3600);
  if (seconds < 1 || seconds > 300 * 3600) {
    status.textContent = 'Enter a duration between 1 second and 300 hours.';
    return;
  }

  targetTime = Date.now() + seconds * 1000;
  startButton.disabled = true;
  hoursInput.disabled = true;
  countdown.classList.remove('finished');
  status.textContent = 'Countdown in progress';
  tick();
  intervalId = window.setInterval(tick, 200);
});
