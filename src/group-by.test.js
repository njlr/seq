import * as seq from '../src';

test('groupBy works for the empty case', () => {
  expect([] |> seq.groupBy(x => x) |> seq.toArray).toEqual([]);
});

test('groupBy works for a simple case 1', () => {
  const xs = [
    'aardvark',
    'xylophone',
    'apple',
    'banana',
    'elephant',
    'zebra',
    'melon',
    'car',
    'monkey',
  ];

  const actual = xs
    |> seq.groupBy(x => x[0])
    |> seq.map(([ key, group ]) => [ key, group |> seq.toArray ])
    |> seq.toArray;

  const expected = [
    [
      'a', [
        'aardvark',
        'apple',
      ],
    ], [
      'x', [
        'xylophone',
      ],
    ], [
      'b', [
        'banana',
      ],
    ], [
      'e', [
        'elephant',
      ],
    ], [
      'z', [
        'zebra',
      ],
    ], [
      'm', [
        'melon',
        'monkey',
      ],
    ], [
      'c', [
        'car',
      ],
    ],
  ];

  expect(actual).toEqual(expected);
});
