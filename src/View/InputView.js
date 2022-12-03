const { Console } = require('@woowacourse/mission-utils');
const {
  checkCorrectNumber,
  checkCorrectUnit,
  checkCorrectMainNumbersize,
  checkCorrectMainNumber,
  checkCorrectMainNumberRange,
  checkCorrectBonusNumberRange,
} = require('../Util/Validation');

const MESSAGE = Object.freeze({
  input_start: '구입금액을 입력해 주세요.\n',
  input_main: '\n당첨 번호를 입력해 주세요.\n',
  input_bonus: '\n보너스 번호를 입력해 주세요.\n',
});

const InputView = {
  readLotteryPrice(comeback, callback) {
    Console.readLine(MESSAGE.input_start, (value) => {
      try {
        InputView.lotteryPriceValidation(Number(value));
        callback(Number(value));
      } catch (e) {
        InputView.errorHandler(e, comeback);
      }
    });
  },

  lotteryPriceValidation(value) {
    checkCorrectNumber(value);
    checkCorrectUnit(value);
  },

  readMainNumber(comeback, callback) {
    Console.readLine(MESSAGE.input_main, (value) => {
      try {
        InputView.mainNumberValidation(value.split(',').map(Number));
        callback(value);
      } catch (e) {
        InputView.errorHandler(e, comeback);
      }
    });
  },

  mainNumberValidation(value) {
    checkCorrectMainNumbersize(value);
    checkCorrectMainNumber(value);
    checkCorrectMainNumberRange(value);
  },

  readBonusNumber(mainNumber, comeback, callback) {
    Console.readLine(MESSAGE.input_bonus, (value) => {
      try {
        InputView.bonusNumberValidation(Number(value));
        callback(mainNumber, Number(value));
      } catch (e) {
        InputView.errorHandler(e, comeback);
      }
    });
  },

  bonusNumberValidation(value) {
    checkCorrectNumber(value);
    checkCorrectBonusNumberRange(value);
  },

  errorHandler(error, callback) {
    Console.print(error.message);
    callback();
  },
};

module.exports = InputView;
