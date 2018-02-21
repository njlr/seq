export const prepend = x => function * (xs) {
  yield x;
  for (const x of xs) {
    yield x;
  }
};
