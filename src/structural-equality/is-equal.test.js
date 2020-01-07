import { isEqual } from './is-equal.js';

test('equals works for simple cases', () => {

  const xs = [
    [ 1, 1 ],
    [ null, null ],
    [ 'a', 'a' ],
    [ {}, {} ],
    [ [], [] ],
    [ { x: 1 }, { x: 1 } ],
    [ { x: { y: [ 7 ] } }, { x: { y: [ 7 ] } } ],
  ];

  for (const [ a, b ] of xs) {
    expect(isEqual(a, b)).toEqual(true);
    expect(isEqual(b, a)).toEqual(true);
  }

  const ys = [
    [ 1, 2 ],
    [ 'a', 'b' ],
    [ [], [ 1 ] ],
    [ { x: 1 }, { y: 1 } ],
    [ { x: 1 }, { x: 2 } ],
  ];

  for (const [ a, b ] of ys) {
    expect(isEqual(a, b)).toEqual(false);
    expect(isEqual(b, a)).toEqual(false);
  }
});

test('isEqual ignores object property order', () => {
  let x = {
    a: 1,
    b: [ 'a', 'b', 'c' ],
    c: 'xyz',
    d: 123,
  };

  let y = {
    c: 'xyz',
    b: [ 'a', 'b', 'c' ],
    a: 1,
    d: 123,
  };

  expect(isEqual(x, y)).toEqual(true);
});
