export const range = (n = Infinity) => () => function * () {
  if (typeof n !== 'number') {
    throw new TypeError('n must be a number');
  }
  if (n < 0) {
    throw new RangeError('n must be at least zero');
  }
  for (let i = 0; i < n; i++) {
    yield i;
  }
};
