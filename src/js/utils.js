import {
  ERROR_MESSAGE, LOTTO_LENGTH, MAX_LOTTO_NUMBER, MIN_LOTTO_NUMBER,
} from './constants.js';

export const $ = (selector, el = document) => el.querySelector(selector);

export const $$ = (selector, el = document) => el.querySelectorAll(selector);

export const countSameNumbers = (arr1, arr2) => {
  let result = 0;
  for (let i = 0; i < LOTTO_LENGTH; i += 1) {
    if (arr1.includes(arr2[i])) {
      result += 1;
    }
  }
  return result;
};

export const checkNumber = (number) => {
  if (number > MAX_LOTTO_NUMBER) throw Error(ERROR_MESSAGE.MAX_NUMBER);
  if (number < MIN_LOTTO_NUMBER) throw Error(ERROR_MESSAGE.MIN_NUMBER);
};

export const show = ($target) => { $target.style.display = ''; };
export const hide = ($target) => { $target.style.display = 'none'; };
