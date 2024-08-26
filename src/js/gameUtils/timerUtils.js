import { timeEl, timeInput } from './gameElements.js';
import { finishGame } from './main.js';

const SECONDS_PER_MINUTE = 60;
let time;
let timerId;
let isGameComplete = false;

// форматирование и отображение времени
const setTime = (time) => {
  let minutes = Math.floor(time / SECONDS_PER_MINUTE);
  let seconds = time % SECONDS_PER_MINUTE;
  let formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  let formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  timeEl.innerHTML = `${formattedMinutes}:${formattedSeconds}`;
};

// отсчет времени
const decreaseTime = () => {
  if (isGameComplete) {
    clearInterval(timerId);
  } else if (time === 0) {
    finishGame('Время вышло!');
    clearInterval(timerId);
  } else {
    let current = --time;
    if (current < 10) {
      current = `0${current}`;
    }
    setTime(current);
  }
};

// сброс таймера
const resetTime = () => {
  clearInterval(timerId);
  time = Number(timeInput.value);
  timerId = setInterval(() => decreaseTime(), 1000);
  setTime(time);
};

export { decreaseTime, resetTime };
