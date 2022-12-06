const handleError = (tryFn, catchFn) => {
  try {
    tryFn();
  } catch (error) {
    catchFn();
  }
};

module.exports = handleError;
