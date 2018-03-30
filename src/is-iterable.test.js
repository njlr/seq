import * as seq from '../src';

test('isIterable works for simple cases', () => {
  expect([] |> seq.isIterable).toEqual(true);
  expect([ 1, 2, 3 ] |> seq.map(x => x * 2) |> seq.isIterable).toEqual(true);
  expect('abc' |> seq.isIterable).toEqual(true);
  expect(1 |> seq.isIterable).toEqual(false);
  expect(null |> seq.isIterable).toEqual(false);
  expect(undefined |> seq.isIterable).toEqual(false);
  expect({ x: 1 } |> seq.isIterable).toEqual(false);
});
