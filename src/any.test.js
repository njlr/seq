import * as seq from '../src';

test('any works for simple cases', () => {
  expect([] |> seq.fromArray |> seq.any()).toEqual(false);
  expect([ 1 ] |> seq.fromArray |> seq.any()).toEqual(true);
  expect([ 1, 2, 3 ] |> seq.fromArray |> seq.any(x => x > 2)).toEqual(true);
  expect([ 1, 2, 3 ] |> seq.fromArray |> seq.any(x => x < 0)).toEqual(false);
});
