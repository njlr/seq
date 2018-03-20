export const prepend = x => xs => () => function * () {
  yield x;
  yield * xs()();
};
