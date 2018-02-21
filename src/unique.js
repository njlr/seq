import { defaultEquality } from './default-equality.js';

export const unique = (e = defaultEquality) => function * (xs) {
  const { hashCode, isEqual } = e;
  const buckets = new Map();
  for (const x of xs) {
    const h = hashCode(x);
    const bucket = buckets.get(h);
    if (bucket) {
      let foundExactMatch = false;
      for (const y of bucket) {
        if (isEqual(x, y)) {
          foundExactMatch = true;
          break;
        }
      }
      if (!foundExactMatch) {
        yield x;
        bucket.push(x);
      }
    } else {
      yield x;
      buckets.set(h, [ x ]);
    }
  }
};
