import { indexed } from './indexed.js';
import { defaultEquality } from './default-equality.js';

export const dict = (equality = defaultEquality) => {
  const { hashCode, isEqual } = equality;

  const store = new Map();

  const get = x => {
    const buckets = store.get(hashCode(x)) || [];

    for (const [ key, value ] of buckets) {
      if (isEqual(key, x)) {
        return value;
      }
    }

    return undefined;
  };

  const set = (key, value) => {
    const bucketGroup = hashCode(key);

    let bucket = store.get(bucketGroup);

    if (!bucket) {
      bucket = [];
      store.set(bucketGroup, bucket);
    }

    for (const [ i, [ x, value ] ] of bucket |> indexed) {
      if (isEqual(key, x)) {
        bucket[i] = [ x, value ];

        return;
      }
    }

    bucket.push([ key, value ]);
  };

  return {
    get,
    set,
  };
};
