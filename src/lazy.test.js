import * as seq from '../src';

test('multiple collections should work as expected', () => {

  const xs = [ 1, 2, 3 ]
    |> seq.fromArray
    |> seq.map(x => x * 2);

  expect(xs |> seq.toArray).toEqual([ 2, 4, 6 ]);
  expect(xs |> seq.toArray).toEqual([ 2, 4, 6 ]);
});
