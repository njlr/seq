export const filter = function * (f, xs) {
  for (const x of xs) {
    if (f(x)) {
      yield x;
    }
  }
};
