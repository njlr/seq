import * as seq from '../src';

test('nth works for simple cases', () => {
  expect([ 'a' ] |> (_ => seq.nth(0, _))).toEqual('a');
  expect([ 1, 2, 3 ] |> (_ => seq.nth(0, _))).toEqual(1);
  expect([ 1, 2, 3 ] |> (_ => seq.nth(1, _))).toEqual(2);

  expect(() => [] |> (_ => seq.nth(3, _))).toThrow();
  expect(() => [ 1, 2, 3 ] |> (_ => seq.nth(5, _))).toThrow();
  expect(() => [ 1, 2, 3 ] |> (_ => seq.nth(-3, _))).toThrow();
});
