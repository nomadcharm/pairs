const screens = document.querySelectorAll('.screen');
const timeEl = document.getElementById('time');
const board = document.getElementById('game');
const cardsNumberInput = document.getElementById('card-input');
const timeInput = document.getElementById('time-input');
const buttonSet = document.querySelector('.button-set');
const startButton = document.getElementById('game-start');
const replayButton = document.getElementById('game-replay');
const newSettingsButton = document.getElementById('new-game-settings');
const numbersGame = document.getElementById('number-cards');
const imgGame = document.getElementById('img-cards');

export {
  timeEl,
  board,
  screens,
  cardsNumberInput,
  timeInput,
  buttonSet,
  startButton,
  replayButton,
  newSettingsButton,
  numbersGame,
  imgGame,
};
