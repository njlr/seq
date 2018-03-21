export const skip = n => {
  if (!Number.isSafeInteger(n)) {
    throw new TypeError('n must be an integer');
  }
  if (n < 0) {
    throw new RangeError('n must be at least zero');
  }
  return xs => ({
    [Symbol.iterator]: function * () {
      let i = 0;
      for (const x of xs) {
        if (i >= n) {
          yield x;
        }
        i++;
      }
    }
  });
};
