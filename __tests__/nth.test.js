import * as seq from '../src';

test('nth works for simple cases', () => {
  expect([ 'a' ] |> seq.nth(0)).toEqual('a');
  expect([ 1, 2, 3 ] |> seq.nth(0)).toEqual(1);
  expect([ 1, 2, 3 ] |> seq.nth(1)).toEqual(2);

  expect(() => [] |> seq.nth(3)).toThrow();
  expect(() => [ 1, 2, 3 ] |> seq.nth(5)).toThrow();
  expect(() => [ 1, 2, 3 ] |> seq.nth(-3)).toThrow();
});
