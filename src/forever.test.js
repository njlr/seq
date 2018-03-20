import * as seq from '../src';

test('forever works as expected', () => {

  const actual = seq.just('a')
    |> seq.forever
    |> seq.take(3)
    |> seq.toArray;

  const expected = [ 'a', 'a', 'a' ];

  expect(actual).toEqual(expected);
});
