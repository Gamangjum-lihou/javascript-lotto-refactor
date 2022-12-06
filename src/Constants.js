const UNIT = 1000;

const INDEX = Object.freeze({
  first: 0,
  second: 1,
  third: 2,
  fourth: 3,
  fifth: 4,
  fail: 5,
});

const INFO = Object.freeze({
  lotto_start: 1,
  lotto_end: 45,
  lotto_size: 6,
});

const PRIZE = Object.freeze({
  first: 2000000000,
  second: 30000000,
  third: 1500000,
  fourth: 50000,
  fifth: 5000,
  fail: 0,
});

module.exports = {
  UNIT,
  INDEX,
  INFO,
  PRIZE,
};
