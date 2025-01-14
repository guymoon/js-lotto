import { DOM_ID, LOTTO_LENGTH } from '../constants.js';
import el from '../dom.js';
import { $, $$, hide } from '../utils.js';

export default class SelfLottoForm {
  constructor() {
    this.$selfLottoList = $(DOM_ID.SELF_LOTTO_LIST);
    this.$autoGenerateButton = $(DOM_ID.GENERATE_BUTTON);
    this.$selfLottoInputContainer = $$(DOM_ID.SELF_LOTTO_INPUT_CONTAINER);
    this.$amountMessage = $(DOM_ID.AMOUNT_MESSAGE);

    hide(this.$selfLottoList);
  }

  createSelfLottoForm(amount) {
    for (let i = 0; i < amount; i += 1) {
      this.$selfLottoList.insertAdjacentElement(
        'afterbegin',
        el(
          '<div id="selfLottoInputContainer">',
          Array.from({ length: LOTTO_LENGTH }, () => '<input type="number" class="self-number mx-1 text-center"/>'),
        ),
      );
    }
    this.updateLottoInputDom();
  }

  bindOnClickSelfGenerateButton(handler) {
    this.$autoGenerateButton.addEventListener('click', () => {
      handler();
    });
  }

  updateLottoInputDom() {
    this.$selfLottoInputContainer = $$(DOM_ID.SELF_LOTTO_INPUT_CONTAINER);
  }

  updateAmountMessgae(autoAmount, selfAmount) {
    this.$amountMessage.textContent = `${selfAmount}개를 수동으로 구매하고, 남은 금액으로 ${autoAmount}개를 자동 구매합니다.`;
  }

  init() {
    while (this.$selfLottoList.firstChild) {
      if (this.$selfLottoList.firstChild === this.$autoGenerateButton) return;
      this.$selfLottoList.removeChild(this.$selfLottoList.firstChild);
    }
  }
}
