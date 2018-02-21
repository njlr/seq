export const concat = function * (ys, xs) {
  for (const x of xs) {
    yield x;
  }
  for (const y of ys) {
    yield y;
  }
};
