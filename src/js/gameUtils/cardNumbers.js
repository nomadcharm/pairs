// создание массива парных чисел
const createNumbersArray = (count) => {
  const numbersArray = [];
  for (let i = 1; i <= count / 2; ++i) {
    numbersArray.push(i, i);
  }
  // перемешивание массива
  return shuffle(numbersArray);
};

// перемешивание массива
const shuffle = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

export { createNumbersArray, shuffle };
