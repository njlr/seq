import * as seq from '../src';

test('reusing seq objects works as expected', () => {

  const xs = [ 1, 2, 3 ] 
    |> seq.fromArray;

  const ys = xs
    |> seq.repeat(3)

  const zs = xs
    |> seq.repeat(2)
    |> seq.map(x => x * 2)

  expect([ ...xs ]).toEqual([ 1, 2, 3 ]);
  expect([ ...ys ]).toEqual([ 1, 2, 3, 1, 2, 3, 1, 2, 3 ]);
  expect([ ...ys ]).toEqual([ 1, 2, 3, 1, 2, 3, 1, 2, 3 ]);
  expect([ ...zs ]).toEqual([ 2, 4, 6, 2, 4, 6 ]);
});
