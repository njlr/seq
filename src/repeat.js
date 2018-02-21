export const repeat = function * (xs) {
  while (true) {
    yield * xs;
  }
};
