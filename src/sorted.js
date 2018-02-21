import { toArray } from './to-array.js';

export const sorted = function * (c, xs) {
  const ys = xs |> toArray;
  ys.sort(c);
  yield * ys;
};
