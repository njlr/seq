export const append = x => xs => () => function * () {
  for (const x of xs()()) {
    yield x;
  }
  yield x;
};
