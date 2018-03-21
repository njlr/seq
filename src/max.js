import { defaultComparison } from './default-comparison.js';
import { min } from './min.js';

export const max = (c = defaultComparison) => {
  if (!c) {
    throw new TypeError('c must be defined');
  }
  return min((i, j) => c(j, i));
};
