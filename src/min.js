import { defaultComparison } from './default-comparison.js';

export const min = (c = defaultComparison) => {
  if (!c) {
    throw new TypeError('c must be defined');
  }
  return xs => {
    if (!xs) {
      throw new TypeError('xs must be define');
    }
    let min = null;
    let foundMin = false;
    for (const x of xs) {
      if (foundMin) {
        if (c(x, min) < 0) {
          min = x;
        }
      } else {
        foundMin = true;
        min = x;
      }
    }
    if (foundMin) {
      return min;
    }
    throw new Error('Expected at least one element but found none');
  };
};
