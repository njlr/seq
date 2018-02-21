export const take = n => function * (xs) {
  let i = 0;
  for (const x of xs) {
    if (i >= n) {
      return;
    }
    yield x;
    i++;
  }
};
