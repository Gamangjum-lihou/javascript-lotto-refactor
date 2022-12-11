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

  printResult({rateOfReturn, result}) {
    // 오타 때문에 30분 지연 reteOfReturn
    Console.print(`3개 일치 (5,000원) - ${result['3']}개`);
    Console.print(`4개 일치 (50,000원) - ${result['4']}개`);
    Console.print(`5개 일치 (1,500,000원) - ${result['5']}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${result['6']}개`);
    Console.print(`총 수익률은 ${rateOfReturn}%입니다.`)
    Console.close();
  },
};

module.exports = OutputView;
