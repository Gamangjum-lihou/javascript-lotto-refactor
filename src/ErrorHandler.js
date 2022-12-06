const { Console } = require('@woowacourse/mission-utils');

function errorHandler(callback, readFunction, input) {
  try {
    callback(input);
  } catch (error) {
    Console.print(`[ERROR] ${error.message}`);
    readFunction(callback);
  }
}

module.exports = errorHandler;
