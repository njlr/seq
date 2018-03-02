const toGenerator = function * (xs) {
  yield * xs;
};

export const buffer = xs => {

  const b = [];
  const g = toGenerator(xs);

  const addToBuffer = () => {
    const next = g.next();
    if (next.done) {
      return false;
    }
    b.push(next.value);
    return true;
  };

  return function * () {
    let i = 0;
    while (true) {
      while (i >= b.length) {
        const moreToAdd = addToBuffer();
        if (!moreToAdd) {
          return;
        }
      }
      yield b[i];
      i++;
    }
  };
};
