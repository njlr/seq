import * as seq from '../src';

test('fromGenerator works as expected', () => {

  const f = function * () {
    yield * [ 1, 2, 3 ];
  };

  const actual = f
    |> seq.fromGenerator
    |> seq.toArray;

  const expected = [ 1, 2, 3 ];

  expect(actual).toEqual(expected);
});
