export const prepend = x => xs => ({
  [Symbol.iterator]: function * () {
    yield x;
    yield * xs;
  }
});
