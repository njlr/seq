export const take = function * (n, xs) {
  let i = 0;
  for (const x of xs) {
    if (i >= n) {
      return;
    }
    yield x;
    i++;
  }
};
