export const repeat = n => {
  if (Number.isNaN(n) || !Number.isSafeInteger(n)) {
    throw new TypeError('n must be a number');
  }
  if (n < 0) {
    throw new RangeError('n must be at least zero');
  }
  return xs => () => function * () {
    for (let i = 0; i < n; i++) {
      yield * xs()();
    }
  };
};
