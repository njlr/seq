import * as seq from '../src';

test('none works for simple cases', () => {
  expect([] |> seq.none()).toEqual(true);
  expect([ 1, 2, 3 ] |> seq.none()).toEqual(false);
  expect([ 1, 2, 3 ] |> seq.none(x => x < 7)).toEqual(false);
  expect([ 1, 2, 3 ] |> seq.none(x => x > 2)).toEqual(false);
  expect([ 1, 2, 3 ] |> seq.none(x => x > 5)).toEqual(true);
});
