const { Console } = require('@woowacourse/mission-utils');

const OUTPUT_MESSAGE = {
  error: (message, name, cause) => `${name} : ${message}\n[CAUSE] : ${cause}`,
};

const OutputView = {
  print(input) {
    Console.print(input);
  },

  printError({ message, name, cause }) {
    Console.print(OUTPUT_MESSAGE.error(message, name, cause));
  },

  printResult(value) {
    Console.print(`3개 일치 (5,000원) - ${value['3']}개`);
    Console.print(`4개 일치 (50,000원) - ${value['4']}개`);
    Console.print(`5개 일치 (1,500,000원) - ${value['5']}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${value['6']}개`);
    Console.close();
  },
};

module.exports = OutputView;
