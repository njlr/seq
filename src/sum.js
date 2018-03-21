export const sum = xs => {
  if (!xs || !xs[Symbol.iterator]) {
    throw new TypeError('xs must be iterable');
  }
  let result = 0;
  for (const x of xs) {
    result = result + x;
  }
  return result;
};
