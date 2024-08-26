// eslint-disable-next-line
const { el} = require("redom")

const controlsScreen = el('div', { class: 'screen screen-one' }, [
  el('div', { class: 'controls screen-one__controls' }, [
    el('h2', { class: 'controls__title' }, 'Игра в пары'),
    el('p', { class: 'controls__descr' }, 'Выбрать количество карточек по вертикали/горизонтали: '),
    el('select', { class: 'input', id: 'card-input', name: 'cards' }, [
      el('option', { value: '2' }, '2'),
      el('option', { value: '4', selected: 'true' }, '4'),
      el('option', { value: '6' }, '6'),
    ]),
    el('p', { class: 'controls__descr' }, 'Выбрать время (в секундах): '),
    el('select', { class: 'input', id: 'time-input', name: 'cards' }, [
      el('option', { value: '10' }, '10'),
      el('option', { value: '30', selected: 'true' }, '30'),
      el('option', { value: '60' }, '60'),
      el('option', { value: '90' }, '90'),
    ]),
    el('div', { class: 'input-group' }, [
      el('p', { class: 'controls__descr' }, 'Выбрать тип игры:'),
      el('label', [
        el('input', { class: 'radio-input', id: 'number-cards', type: 'radio', name: 'radio', checked: 'true' }),
        el('span', { class: 'input-custom' }, 'Цифры'),
      ]),
      el('label', [
        el('input', { class: 'radio-input', id: 'img-cards', type: 'radio', name: 'radio' }),
        el('span', { class: 'input-custom' }, 'Картинки'),
      ]),
    ]),
    el('button', { class: 'button-reset button', id: 'game-start' }, 'Начать игру'),
  ]),
]);

export default controlsScreen;
