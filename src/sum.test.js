import * as seq from '../src';

test('join works for simple cases', () => {
  expect([] |> seq.sum).toEqual(0);
  expect([ 1, 2, 3 ] |> seq.sum).toEqual(6);
});
