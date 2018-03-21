export const zip = ys => {
  if (!ys[Symbol.iterator]) {
    throw new TypeError('ys must be iterable');
  }
  return xs => {
    if (!xs[Symbol.iterator]) {
      throw new TypeError('xs must be iterable');
    }
    return {
      [Symbol.iterator]: function * () {
        const xsGenerator = xs[Symbol.iterator]();
        const ysGenerator = ys[Symbol.iterator]();
        while (true) {
          const x = xsGenerator.next();
          const y = ysGenerator.next();
          if (x.done || y.done) {
            break;
          }
          yield [ x.value, y.value ];
        }
      }
    };
  };
};
