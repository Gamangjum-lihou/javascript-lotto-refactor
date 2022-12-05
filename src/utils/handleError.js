const { Console } = require('@woowacourse/mission-utils');

const handleError = (tryFn, catchFn) => {
  try {
    tryFn();
  } catch (error) {
    Console.print(error.prefix + error.message);
    catchFn();
  }
};

module.exports = handleError;
