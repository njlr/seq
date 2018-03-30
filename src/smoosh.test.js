import * as seq from '../src';

test('smoosh works as expected', () => {

  expect([] |> seq.smoosh |> seq.toArray).toEqual([]);
  expect([ 'abc' ] |> seq.smoosh |> seq.toArray).toEqual([ 'abc' ]);
  expect([ [ [ [ 'a' ] ] ] ] |> seq.smoosh |> seq.toArray).toEqual([ 'a' ]);
  expect([ 1, 2, 3 ] |> seq.smoosh |> seq.toArray).toEqual([ 1, 2, 3 ]);
  expect([ 1, [ 2, [ 3 ] ] ] |> seq.smoosh |> seq.toArray).toEqual([ 1, 2, 3 ]);
  expect([ [], 1, [ [ 2 ] ], [], 3 ] |> seq.smoosh |> seq.toArray).toEqual([ 1, 2, 3 ]);
});
