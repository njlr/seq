import * as seq from '../src';

test('join works for simple cases', () => {
  expect([] |> seq.join()).toEqual('');
  expect([ 1, 2, 3 ] |> seq.join(', ')).toEqual('1, 2, 3');
});
