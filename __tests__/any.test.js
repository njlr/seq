import * as seq from '../src';

test('any works for simple cases', () => {
  expect([] |> seq.any()).toEqual(false);
  expect([ 1 ] |> seq.any()).toEqual(true);
  expect([ 1, 2, 3 ] |> seq.any(x => x > 2)).toEqual(true);
  expect([ 1, 2, 3 ] |> seq.any(x => x < 0)).toEqual(false);
});
