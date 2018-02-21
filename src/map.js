export const map = function * (f, xs) {
  for (const x of xs) {
    yield f(x);
  }
};
