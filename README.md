## Проект: Pairs 🎴🎴

**Pairs** - простая игра в пары, где игроки взаимодействуют с квадратным полем карточек, расположенных рубашкой вверх. Игрок открывает карточки по одной, пытаясь найти одинаковые. Если открытые карточки совпадают, они остаются открытыми, в противном случае они переворачиваются обратно. Игрок может продолжать открывать карточки до тех пор, пока не найдет все пары. Игра завершается, когда все карточки на поле открыты и все пары найдены или пока не закончится время. Время, как и количество карточек игрок может выбрать до начала игры. В игре предусмотрены два режима: карточки с числами и карточки с изображениями водных животных.

### 🚀 Установка:

Установка зависимостей:
```
npm install
```
Запуск сервера разработки:
```
npm run dev
```
Запуск production сборки:
```
npm run build
```

### 🔬 Тестирование:
Запуск тестирования:
```
npm run test
```
Тесты проекта охватывают ключевые сценарии игры. При дефолтных настройках игра отображает поле размером четыре на четыре клетки, где цифры на карточках невидимы для игрока. При нажатии на произвольную карточку проверено, что она остается открытой, если не были выполнены другие действия, что соответствует ожидаемому поведению игры. 
Затем была протестирована последовательность нажатий на карточки: игрок нажимал на левую верхнюю карточку и последующие, пока не находил пару. В этом случае было подтверждено, что найденные карточки остаются видимыми. Также протестирован сценарий, когда игрок нажимал на карточки, и если они не совпадали, проверено, что две несовпадающие карточки закрываются после нажатия на третью. Все тесты прошли успешно, что подтверждает корректность работы игры.

### 🛠️ Технологии:

- [JavaScript](https://ecma-international.org/publications-and-standards/standards/ecma-262/)
- [Redom](https://redom.js.org/)
- [Sass](https://sass-lang.com/)
- [Webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Cypress](https://www.cypress.io/)
