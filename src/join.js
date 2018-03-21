export const join = (s = '') => xs => {
  if (!xs || !xs[Symbol.iterator]) {
    throw new TypeError('xs must be iterable');
  }
  let result = '';
  let isFirst = true;
  for (const x of xs) {
    if (isFirst) {
      result = x;
      isFirst = false;
    } else {
      result = result + s + x;
    }
  }
  return result;
};