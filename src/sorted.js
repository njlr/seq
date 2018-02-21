import { defaultComparison } from './default-comparison.js';
import { toArray } from './to-array.js';

export const sorted = (c = defaultComparison) => function * (xs) {
  const ys = xs |> toArray;
  ys.sort(c);
  yield * ys;
};
