import * as seq from '../src';

test('forever works as expected', () => {

  expect(seq.forever('a') |> seq.take(3) |> seq.toArray).toEqual([ 'a', 'a', 'a' ]);
});
