/// <reference types="cypress"/>

describe('Игра в пары', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5500/dist');
    // cy.visit('http://localhost:8080/')
    cy.contains('Начать игру').click();
  });

  it('В начальном состоянии игра должна иметь поле четыре на четыре клетки, в каждой клетке цифра должна быть невидима.', () => {
    // поле 4 на 4
    cy.get('.card').should('have.length', '16');
    // цифры/картинки не видны пользователю
    cy.get('.card').should('have.css', 'color', 'rgba(0, 0, 0, 0)')
  });

  it('Нажать на одну произвольную карточку. Убедиться, что она осталась открытой.', () => {
    // выбор случайной карточки
    const card = cy.get('.card').its('length').then((length) => {
      const randomIndex = Cypress._.random(0, length - 1);
      cy.get('.card').eq(randomIndex).click();
    })
    // ожидание 3 секунды
    cy.wait(3000);

    // проверка, что карточка осталась открытой
    card.should('have.class', 'flipped');
  });

  it(`Нажать на левую верхнюю карточку, затем на следующую. Если это не пара, то повторять со следующей карточкой,
      пока не будет найдена пара. Проверить, что найденная пара карточек осталась видимой.`, () => {
    async function findPair(idx) {
      let firstCardHtml;
      let secondCardHtml;


      if (idx === 15 || idx + 1 === 15) {
        idx = 0
      }

      // нажатие на первую карту, запись ее значения для сравнения
      await cy.get('.card')
        .eq(idx)
        .click()
        .then(($el) => {
          firstCardHtml = $el.prop('innerHTML');
        });

      // нажатие на вторую случайную карту из неоткрытых карт на поле
      await cy.get('.card:not(.flipped)')
        .then(($cards) => {
          const randomIndex = Cypress._.random(0, $cards.length - 1);
          const $randomCard = $cards.eq(randomIndex);

          if (!$randomCard.hasClass('flipped')) {
            $randomCard.click();
            secondCardHtml = $randomCard.prop('innerHTML');
          }
        })
        .then(() => {
          if (firstCardHtml !== secondCardHtml) {
            findPair(idx + 1)
          } else {
            cy.wait(3000);
            // проверка, что карты остались открытыми
            cy.get('.card.flipped.matched')
              .should('have.length', 2);
          }
        });
    }

    findPair(0)
  });

  it(`Нажать на левую верхнюю карточку, затем на следующую.
      Если это пара, то повторять со следующими двумя карточками, пока не найдутся непарные карточки.
      Проверить, что после нажатия на третью карточку две несовпадающие карточки становятся закрытыми.`, () => {

    async function checkCards(idx) {
      let firstCardHtml;
      let secondCardHtml;

      // нажатие на первую карту
      await cy.get('.card')
        .eq(idx)
        .click()
        .then(($el) => {
          firstCardHtml = $el.prop('innerHTML');
        });

      // нажатие на вторую карту
      await cy.get('.card:not(.flipped)')
        .eq(idx)
        .click()
        .then(($el) => {
          secondCardHtml = $el.prop('innerHTML')
        })
        .then(async () => {
          if (firstCardHtml === secondCardHtml) {
            checkCards(idx + 2)
          } else if (firstCardHtml !== secondCardHtml) {
            await cy.get('.card')
              .eq(idx + 2)
              .click()
            cy.wait(1000);
            // проверка, что карты (за исключением совпавших) закрылись при нажатии на 3ю карту
            cy.get('.card.flipped').not('.card.flipped.matched').its('length').should('eq', 1);
          }
        })
    }

    checkCards(0)
  })
});
