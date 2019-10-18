const hashCodeString = s => {
  let h = 0;

  for (let i = 0; i < s.length; i++) {
    h = (h << 5) - h + s.charCodeAt(i) | 0;
  }

  return h;
};

const hashCodeNumber = x => {
  if (Number.isNaN(x)) {
    return 0;
  }

  if (!Number.isFinite(x)) {
    return 0;
  }

  return Math.trunc(x) % 2147483647; // A large prime number
};

const hashCodeObject = (x, visited) => {
  let hash = 0;

  for (const [ key, value ] of Object.entries(x)) {
    hash = ((hash << 5) - hash) +
      hashCodeString(key) * 7 +
      hashCode(value, visited);
    hash = hash & hash;
  }

  return hash;
};

export function hashCode(x, visited = new Set()) {
  if (x === undefined) {
    throw new ReferenceError('x must not be undefined');
  }

  if (x === null) {
    return 0;
  }

  if (typeof x === 'number') {
    return hashCodeNumber(x);
  }

  if (typeof x === 'string') {
    return hashCodeString(x);
  }

  if (typeof x === 'object') {
    if (visited.has(x)) {
      return 0;
    }

    visited.add(x);

    return hashCodeObject(x, visited);
  }

  return 0;
};
