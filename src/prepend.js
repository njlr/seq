export const prepend = function * (x, xs) {
  yield x;
  for (const x of xs) {
    yield x;
  }
};
