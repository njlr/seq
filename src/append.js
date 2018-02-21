export const append = x => function * (xs) {
  for (const x of xs) {
    yield x;
  }
  yield x;
};
