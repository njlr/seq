# seq

A simple library for manipulating generators and arrays in JavaScript. 

```
yarn add @njlr/seq
```


## Why? 🤔

 * Some of the built-in Array functions are mutating (e.g. `Array.prototype.sort`)
 * Many array functions are missing. Where is `Array.prototype.flatMap`?
 * A chain of array functions creates a new array at every stage: the operations are not lazy. 
 * [lodash](https://lodash.com/) and [friends](https://github.com/jussi-kalliokoski/trine) require a wrapper object for chaining calls. We use `|>` to achieve this at compile-time! 
 * This package is a good citizen. It has no dependencies and does not mutate any global objects. 


## Demo

```javascript=
import * as seq from '@njlr/seq';

const x = [ 1, 5, 1, 2, 7, 3, 3, 4, 5, 0 ] 
  |> (_ => unique(seq.defaultEquality, _))
  |> (_ => seq.map(x => x * 2, _))
  |> (_ => seq.filter(x => x > 4, _))
  |> (_ => seq.sorted(seq.defaultComparison, _))
  |> seq.toArray;

// x is [ 6, 8, 10, 14 ]
```


## Development

Dependencies are managed by Yarn: 

```bash=
yarn install --pure-lockfile
```

To run all tests:

```bash=
yarn test
```

To build the library:

```bash=
yarn build
```
