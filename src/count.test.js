import * as seq from '../src';

test('count works for simple cases', () => {
  expect([] |> seq.count).toEqual(0);
  expect([ 1, 2, 3 ] |> seq.count).toEqual(3);
  expect([ 'a', 'b', 'c', 'd', 'e' ] |> seq.count).toEqual(5);
});
