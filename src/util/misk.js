export function declOfNum(number, words, isThatMainPage) {
  const ofSecondType = number % 100 > 4 && number % 100 < 20;

  let idx;
  if (ofSecondType) {
    idx = 2;
  } else {
    const idxInDecade = number % 10;
    idx = [2, 0, 1, 1, 1, 2][Math.min(5, idxInDecade)]
  }

  return isThatMainPage? `${number} ${words[idx]}` : words[idx] ;
}