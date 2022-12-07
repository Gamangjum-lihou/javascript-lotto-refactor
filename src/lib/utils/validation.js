const { PRICE_UNIT } = require('../constants/system');

const isNumber = (ele) => Number.isInteger(ele) && !Number.isNaN(ele);

/**
 *
 * @param {Array<any>} numbers
 * @returns boolean
 */
const isNumberArray = (numbers) => numbers.every(() => isNumber);

/**
 *
 * @param {number} range
 * @param {Array<any>} numbers
 * @returns
 */
const isRangeArray = (range, numbers) => numbers.length === range;

const isRangeNumber = ({ min, max }, ele) => ele >= min && ele <= max;

/**
 *
 * @param {Object{min, max}} param0
 * @param {*} numbers
 * @returns
 */
const isRangeNumberArray = (range, numbers) => numbers.every((ele) => isRangeNumber(range, ele));

const isUnitNumber = (ele) => ele % PRICE_UNIT === 0;

const isOverlap = (numbers) => {
  const setNumbers = new Set(numbers);
  return numbers.length !== setNumbers.size;
};

const isMinNumber = (min, ele) => min > ele;

module.exports = {
  isNumber,
  isNumberArray,
  isRangeArray,
  isRangeNumberArray,
  isRangeNumber,
  isUnitNumber,
  isOverlap,
  isMinNumber,
};
