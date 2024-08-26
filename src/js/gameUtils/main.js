import { timeEl, board, cardsNumberInput, buttonSet, numbersGame, imgGame } from './gameElements.js';
import { createNumbersArray } from './cardNumbers.js';
import { resetTime } from './timerUtils.js';
import { Card, AmazingCard } from './Card.js';
import './gameControlsUtils.js';

// eslint-disable-next-line no-unused-vars
let isGameComplete = false;
let firstCard = null;
let secondCard = null;
let playCards = [];

// запуск игры
const startGame = (count) => {
  let input = Number(cardsNumberInput.value);
  count = Math.pow(input, 2);
  playCards = createNumbersArray(count);

  let columnCount = input;
  board.style = `grid-template-columns: repeat(${columnCount}, 1fr); grid-template-rows: repeat(${columnCount}, 1fr)`;

  createCardElements(count);
};

// создание карточек на игровом поле
const createCardElements = (count) => {
  for (let i = 0; i < count; i++) {
    if (numbersGame.checked) {
      new Card(board, playCards[i], flipCard);
    } else if (imgGame.checked) {
      new AmazingCard(board, playCards[i], flipCard);
    }
  }
};

// открытие карточек
const flipCard = (card) => {
  if (firstCard !== null && secondCard !== null) {
    firstCard.open = false;
    secondCard.open = false;
    firstCard = null;
    secondCard = null;
  }

  if (firstCard === null) {
    firstCard = card;
  } else {
    secondCard = card;
  }

  checkForMatch();
};

// проверка двух открытых карточек на совпадение
const checkForMatch = () => {
  if (firstCard !== null && secondCard !== null) {
    if (firstCard.cardNumber === secondCard.cardNumber) {
      firstCard.success = true;
      secondCard.success = true;
      firstCard = null;
      secondCard = null;
    }
  }

  checkForWin();
};

// проверка на выигрыш
const checkForWin = () => {
  if (document.querySelectorAll('.matched').length === playCards.length) {
    setTimeout(() => {
      finishGame('Победа!');
    }, 500);
  }
};

// завершение игры (выигрыш || истекло время)
const finishGame = (message) => {
  isGameComplete = true;
  board.style = `grid-template-columns: repeat(1, 1fr)`;
  board.innerHTML = `<p class="text">${message}</p>`;
  timeEl.parentNode.classList.add('hidden');
  buttonSet.classList.remove('hidden');
  resetTime();
};

export { finishGame, startGame };
