import { DOM_ID, ERROR_MESSAGE, WINNING_NUMBERS_LENGTH } from '../constants.js';
import {
  $, $$, checkNumber, hide,
} from '../utils.js';

export default class LottoForm {
  constructor() {
    this.$lottoInputForm = $(DOM_ID.LOTTO_INPUT_FORM);
    this.$getResultButton = $(DOM_ID.GET_RESULT_BUTTON);
    this.$winningNumbers = $$(DOM_ID.WINNING_NUMBERS);
    this.$bonusNumber = $(DOM_ID.BONUS_NUMBER);

    hide(this.$lottoInputForm);
  }

  clearInput() {
    this.$lottoInputForm.reset();
  }

  checkLottoNumber(winningNumbers, bonusNumber) {
    const uniqueWinningNumbers = [...new Set(winningNumbers), bonusNumber];
    uniqueWinningNumbers.forEach((number) => {
      checkNumber(number);
      if (uniqueWinningNumbers.length !== WINNING_NUMBERS_LENGTH) throw Error(ERROR_MESSAGE.DUPLICATED_NUMBER);
    });
  }

  bindOnClickGetResultButton(handler) {
    this.$getResultButton.addEventListener('click', (event) => {
      event.preventDefault();
      handler(
        [...this.$winningNumbers].map(($input) => Number($input.value)),
        this.$bonusNumber.value,
      );
    });
  }
}
