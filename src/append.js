export const append = x => xs => ({
  [Symbol.iterator]: function * () {
    yield * xs;
    yield x;
  }
});
