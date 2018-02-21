import * as seq from '../src';

test('all works for simple cases', () => {
  expect([] |> seq.all()).toEqual(true);
  expect([ 1, 2, 3 ] |> seq.all()).toEqual(true);
  expect([ 1, 2, 3 ] |> seq.all(x => x < 7)).toEqual(true);
  expect([ 1, 2, 3 ] |> seq.all(x => x > 2)).toEqual(false);
});
