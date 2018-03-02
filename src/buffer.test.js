import * as seq from '../src';

test('buffer works for the empty case', () => {
  const actual = [] 
    |> seq.buffer
    |> (f => f())
    |> seq.toArray;
  const expected = [];
  expect(actual).toEqual(expected);
});

test('buffer works for a simple case', () => {

  const actual = [ 1, 2, 3 ] 
    |> seq.buffer
    |> (f => f())
    |> seq.toArray;

  const expected = [ 1, 2, 3 ];

  expect(actual).toEqual(expected);
});

test('buffer works only calls the underlying sequence once', () => {

  let firstRun = true;

  const f = function * () {
    if (firstRun) {
      firstRun = false;
    } else {
      throw new Error('Only one run is expected. ');
    }
    yield * [ 1, 2, 3 ];
  };

  const g = f() 
    |> seq.buffer;

  const a = g()
    |> seq.toArray;

  const b = g()
    |> seq.toArray;
  
  const expected = [ 1, 2, 3 ];

  expect(a).toEqual(expected);
  expect(b).toEqual(expected);
});
