export const append = function * (x, xs) {
  for (const x of xs) {
    yield x;
  }
  yield x;
};
