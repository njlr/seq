export const filter = f => function * (xs) {
  for (const x of xs) {
    if (f(x)) {
      yield x;
    }
  }
};
