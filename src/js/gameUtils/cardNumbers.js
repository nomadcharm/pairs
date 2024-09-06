const createNumbersArray = (count) => {
  const numbersArray = [];
  for (let i = 1; i <= count / 2; ++i) {
    numbersArray.push(i, i);
  }

  return shuffle(numbersArray);
};

const shuffle = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

export { createNumbersArray, shuffle };
