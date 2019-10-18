import { hashCode } from './hash-code.js';

const verifyHashCode = x => {
  expect(hashCode(x)).toEqual(hashCode(x));
  expect(Number.isSafeInteger(hashCode(x))).toEqual(true);
};

test('hashCode works for numbers', () => {
  const xs = [
    123,
    NaN,
    0,
    -666,
    Infinity,
    123.456,
  ];

  for (const x of xs) {
    verifyHashCode(x);
  }
});

test('hashCode works for strings', () => {
  const xs = [
    '',
    '\n\t\r',
    'abcde',
    '123',
    'Hello, world. ',
  ];

  for (const x of xs) {
    verifyHashCode(x);
  }

  const ys = [
    [ 'abc', 'xyz' ],
    [ '', '1234' ],
  ];

  for (const [ i, j ] of ys) {
    expect(hashCode(i)).not.toEqual(hashCode(j));
  }
});

test('hashCode throws for undefined', () => {
  expect(() => hashCode(undefined)).toThrow();
});

test('hashCode works for null', () => {
  verifyHashCode(null);
});

test('hashCode works for objects', () => {
  const xs = [
    {},
    { x: 123, y: 456 },
  ];

  for (const x of xs) {
    verifyHashCode(x);
  }

  const ys = [
    [ { x: 7 }, { x: 4 } ],
    [ { x: 9 }, { y: 9 } ],
  ];

  for (const [ i, j ] of ys) {
    expect(hashCode(i)).not.toEqual(hashCode(j));
  }
});

test('hashCode works for arrays', () => {
  const xs = [
    [],
    [ 1, 2, 3 ],
    [ {}, null, NaN, 123, 'abc' ],
  ];

  for (const x of xs) {
    verifyHashCode(x);
  }
});

test('hashCode works for cyclical objects', () => {
  let x = {
    a: 1,
    b: [ 'a', 'b', 'c' ],
  };

  x.y = x;

  verifyHashCode(x);
});
