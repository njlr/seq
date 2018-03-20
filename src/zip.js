const arrayToGenerator = function * (xs) {
  yield * xs;
};

export const zip = ys => xs => () => function * () {
  const xsGenerator = Array.isArray(xs) ? 
    arrayToGenerator(xs) : 
    xs()();
  const ysGenerator = Array.isArray(ys) ? 
    arrayToGenerator(ys) : 
    ys()();
  while (true) {
    const x = xsGenerator.next();
    const y = ysGenerator.next();
    if (x.done || y.done) {
      break;
    }
    yield [ x.value, y.value ];
  }
};
