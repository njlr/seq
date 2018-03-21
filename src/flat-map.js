export const flatMap = f => {
  if (!f) {
    throw new TypeError('f must be a function');
  }
  return xs => ({
    [Symbol.iterator]: function * () {
      for (const x of xs) {
        yield * f(x);
      }
    }
  });
};
