const { Console } = require('@woowacourse/mission-utils');
const { LINE_BREAK } = require('./lib/constants/message');

const output = {
  print: (message) => Console.print(message),
  printLottoCount: (count) => Console.print(`${LINE_BREAK}${count}개를 구매했습니다.`),
  printLottoList: (lottoList) => {
    lottoList.forEach((message) => Console.print(message));
  },
  close: () => Console.close(),
};

const input = {
  readLine: (message, callback) => Console.readLine(message + LINE_BREAK, callback),
};

class View {
  constructor() {
    this.output = output;
    this.input = input;
  }
}

module.exports = View;
