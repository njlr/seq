import { range } from './range.js';
import { zip } from './zip.js';

export const indexed = xs => zip(xs)(range());
