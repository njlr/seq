import { toArray } from './to-array.js';

export const reverse = function * (xs) {
  const ys = xs |> toArray;
  ys.reverse();
  yield * ys;
};
