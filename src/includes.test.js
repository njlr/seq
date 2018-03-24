import * as seq from '../src';

test('includes works for simple cases', () => {
  expect([ 1 ] |> seq.includes(1)).toEqual(true);
  expect([ 3, 2, 1 ] |> seq.includes(2)).toEqual(true);
  expect([] |> seq.includes(1)).toEqual(false);
  expect([ 1, 2, 3 ] |> seq.includes(7)).toEqual(false);
});
