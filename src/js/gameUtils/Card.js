import {
  card1,
  card2,
  card3,
  card4,
  card5,
  card6,
  card7,
  card8,
  card9,
  card10,
  card11,
  card12,
  card13,
  card14,
  card15,
  card16,
  card17,
  card18,
  defaultImg,
} from './imgImports';

class Card {
  _open = false;
  _success = false;

  constructor(container, cardNumber, flip) {
    this.createElement(container);
    this.cardNumber = cardNumber;
    this.flip = flip;
    this.handleClick();
  }

  createElement(container) {
    this.cardElement = document.createElement('div');
    this.cardElement.classList.add('card');
    this.cardElement.textContent = this.cardNumber;
    container.append(this.cardElement);
  }

  handleClick() {
    this.cardElement.addEventListener('click', () => {
      if (!this.open && !this.success) {
        this.open = true;
        this.flip(this);
      }
    });
  }

  set cardNumber(value) {
    this._cardNumber = value;
    if (this.cardElement) {
      this.cardElement.textContent = value;
    }
  }

  get cardNumber() {
    return this._cardNumber;
  }

  set open(value) {
    this._open = value;
    if (value) {
      this.cardElement.classList.add('flipped');
    } else {
      this.cardElement.classList.remove('flipped');
    }
  }

  get open() {
    return this._open;
  }

  set success(value) {
    this._success = value;
    if (value) {
      this.cardElement.classList.add('matched');
    } else {
      this.cardElement.classList.remove('matched');
    }
  }

  get success() {
    return this._success;
  }
}

class AmazingCard extends Card {
  constructor(container, cardNumber, flip) {
    super(container, cardNumber, flip);
  }

  set cardNumber(value) {
    const cardsImgArray = [
      card1,
      card2,
      card3,
      card4,
      card5,
      card6,
      card7,
      card8,
      card9,
      card10,
      card11,
      card12,
      card13,
      card14,
      card15,
      card16,
      card17,
      card18,
    ];

    const img = document.createElement('img');
    img.classList.add('card__img');
    img.src = cardsImgArray[value - 1];

    if (this.cardElement) {
      this.cardElement.innerHTML = '';
      this.cardElement.append(img);
    }

    img.onerror = () => {
      img.src = defaultImg;
      throw new Error('Не удалось загрузить изображение');
    };

    this._cardNumber = value;
  }

  get cardNumber() {
    return this._cardNumber;
  }
}

export { Card, AmazingCard };
