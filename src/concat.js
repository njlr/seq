export const concat = ys => xs => ({
  [Symbol.iterator]: function * () {
    for (const x of xs) {
      yield x;
    }
    for (const y of ys) {
      yield y;
    }
  }
});
