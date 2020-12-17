import './styles.css';
const refs = {
  body: document.querySelectorAll('body'),
  days: document.querySelector("span[data-value='days']"),
  hours: document.querySelector("span[data-value='hours']"),
  minutes: document.querySelector("span[data-value='mins']"),
  seconds: document.querySelector("span[data-value='secs']"),
};

function count() {
  setInterval(() => {
    const targetDate = new Date('Dec 20, 2020');
    let time = targetDate - Date.now();
    const times = getTimeComponents(time);
    updateClock(times);
  }, 1000);
}

function pad(value) {
  return String(value).padStart(2, '0');
}

function getTimeComponents(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
  return { days, hours, mins, secs };
}

function updateClock({ days, hours, mins, secs }) {
  refs.days.textContent = days;
  refs.hours.textContent = hours;
  refs.minutes.textContent = mins;
  refs.seconds.textContent = secs;
}
count();
