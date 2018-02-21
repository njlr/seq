export const map = f => function * (xs) {
  for (const x of xs) {
    yield f(x);
  }
};
