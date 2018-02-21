export const flatMap = f => function * (xs) {
  for (const x of xs) {
    yield * f(x);
  }
};
