// eslint-disable-next-line
const { el } = require('redom');

const gameScreen = el('div', { class: 'screen screen-two' }, [
  el('div', { class: 'screen-two__controls' }, [
    el('p', { class: 'time' }, 'Осталось: ', [el('span', { id: 'time' })]),
    el('div', { class: 'button-set hidden' }, [
      el('button', { class: 'button button-hidden', id: 'game-replay' }, 'Сыграть ещё раз'),
      el('button', { class: 'button button-hidden', id: 'new-game-settings' }, 'Сбросить настройки игры'),
    ]),
  ]),
  el('div', { class: 'container' }, [el('div', { class: 'game', id: 'game' })]),
]);

export default gameScreen;
