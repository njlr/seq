import * as seq from '../src';

test('strictEquality works for simple cases', () => {

  const { isEqual } = seq.strictEquality;

  const a = {
    y: 2,
  };

  expect(isEqual(1, 1)).toEqual(true);
  expect(isEqual(true, true)).toEqual(true);
  expect(isEqual(false, false)).toEqual(true);
  expect(isEqual(a, a)).toEqual(true);
  expect(isEqual('abc', 'abc')).toEqual(true);
  expect(isEqual({ x: 1 }, { x: 1 })).toEqual(false);
});
