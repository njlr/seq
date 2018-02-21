export const skip = function * (n, xs) {
  let i = 0;
  for (const x of xs) {
    if (i >= n) {
      yield x;
    }
    i++;
  }
};
