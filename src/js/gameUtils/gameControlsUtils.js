import { timeEl, board, screens, buttonSet, startButton, replayButton, newSettingsButton } from './gameElements.js';
import { resetTime } from './timerUtils.js';
import { startGame } from './main.js';

//eslint-disable-next-line
let isGameComplete = false;

// сброс игры / подготовка к новой игре
const resetGame = () => {
  isGameComplete = false;
  board.innerHTML = '';
  timeEl.parentNode.classList.remove('hidden');
  buttonSet.classList.add('hidden');
  resetTime();
};

// повторить игру (с прежними настройками)
replayButton.addEventListener('click', () => {
  resetGame();
  startGame();
});

// выбрать новые настройки для след. игры
newSettingsButton.addEventListener('click', () => {
  resetGame();
  screens[1].classList.add('up');
  screens[0].classList.remove('down');
});

// начать игру
startButton.addEventListener('click', () => {
  resetGame();
  screens[0].classList.add('down');
  screens[1].classList.remove('up');
  startGame();
});
