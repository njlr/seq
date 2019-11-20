import * as seq from '../src';

test('dict works for simple cases', () => {
  const d = seq.dict(seq.structuralEquality);

  expect(!!d.get('a')).toEqual(false);

  d.set('a', 123);

  expect(d.get('a')).toEqual(123);

  d.set('b', 456);

  expect(d.get('a')).toEqual(123);
  expect(d.get('b')).toEqual(456);
});
