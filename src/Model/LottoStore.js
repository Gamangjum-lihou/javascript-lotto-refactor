const { MESSAGE } = require('../lib/constants/error');
const { PRICE_UNIT } = require('../lib/constants/system');
const { lottoListFormatter } = require('../lib/utils/formatter');
const { createRandomLotto } = require('../lib/utils/gameSystem');
const {
  isNumber, isUnitNumber, isMinNumber,
} = require('../lib/utils/validation');
const ValidationError = require('../ValidationError');

class Account {
  #account;

  #count;

  #lottos;

  constructor(account) {
    this.#account = Number(account);
    this.validate();
    this.calc();
  }

  validate() {
    if (!isNumber(this.#account)) {
      throw new ValidationError(MESSAGE.number);
    }
    if (isMinNumber(PRICE_UNIT, this.#account)) {
      throw new ValidationError(MESSAGE.min);
    }
    if (!isUnitNumber(this.#account)) {
      throw new ValidationError(MESSAGE.unit);
    }
  }

  calc() {
    this.#count = this.#account / PRICE_UNIT;
    this.#lottos = createRandomLotto(this.#count);
  }

  getAccount() {
    return this.#account;
  }

  getCount() {
    return this.#count;
  }

  getLottos() {
    return this.#lottos;
  }

  getLottosMessage() {
    return this.#lottos.map((lotto) => lottoListFormatter(lotto));
  }
}

module.exports = Account;
