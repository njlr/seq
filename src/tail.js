export const tail = xs => ({
  [Symbol.iterator]: function * () {
    let isFirst = true;
    for (const x of xs) {
      if (isFirst) {
        isFirst = false;
      } else {
        yield x;
      }
    }
    if (isFirst) {
      throw new Error('Expected at least one element');
    }
  }
});
