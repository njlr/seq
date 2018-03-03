export const forever = function * (x) {
  while (true) {
    yield x;
  }
};
