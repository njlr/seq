import * as seq from '../src';

test('head works for simple cases', () => {
  expect([ 3, 2, 1 ] |> seq.head).toEqual(3);
  expect([ 1 ] |> seq.head).toEqual(1);
  expect(() => [] |> seq.head).toThrow();
});
