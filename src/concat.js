export const concat = ys => xs => ({
  [Symbol.iterator]: function * () {
    yield * xs;
    yield * ys;
  }
});
