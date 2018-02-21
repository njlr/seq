export const takeWhile = f => function * (xs) {
  for (const x of xs) {
    if (!f(x)) {
      return;
    }
    yield x;
  }
};
