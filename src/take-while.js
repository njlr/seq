export const takeWhile = function * (f, xs) {
  for (const x of xs) {
    if (!f(x)) {
      return;
    }
    yield x;
  }
};
