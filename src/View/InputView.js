const { Console } = require('@woowacourse/mission-utils');
const {
  checkCorrectNumber,
  checkCorrectUnit,
  checkCorrectMainNumbersize,
  checkCorrectMainNumber,
  checkCorrectMainNumberRange,
  checkCorrectBonusNumberRange,
} = require('../Util/Validation');

const InputView = {
  readLotteryPrice(comback, callback) {
    Console.readLine('구입금액을 입력해 주세요.\n', (value) => {
      try {
        InputView.lotteryPriceValidation(Number(value));
        callback(Number(value));
      } catch (e) {
        Console.print(e.message);
        comback();
      }
    });
  },

  lotteryPriceValidation(value) {
    checkCorrectNumber(value);
    checkCorrectUnit(value);
  },

  readMainNumber(comeback, callback) {
    Console.readLine('\n당첨 번호를 입력해 주세요.\n', (value) => {
      try {
        InputView.mainNumberValidation(value.split(',').map(Number));
        callback(value);
      } catch (e) {
        Console.print(e.message);
        comeback();
      }
    });
  },

  mainNumberValidation(value) {
    checkCorrectMainNumbersize(value);
    checkCorrectMainNumber(value);
    checkCorrectMainNumberRange(value);
  },

  readBonusNumber(mainNumber, comeback, callback) {
    Console.readLine('\n보너스 번호를 입력해 주세요.\n', (value) => {
      try {
        InputView.bonusNumberValidation(Number(value));
        callback(mainNumber, Number(value));
      } catch (e) {
        Console.print(e.message);
        comeback(mainNumber);
      }
    });
  },

  bonusNumberValidation(value) {
    checkCorrectNumber(value);
    checkCorrectBonusNumberRange(value);
  },
};

module.exports = InputView;
