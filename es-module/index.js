import { phi, plus, minus, divide, multiply } from "./math.js";

import * as math from "./math.js";

import penambahan from "./math.js";

import * as mathCjs from "./math.cjs";

console.log(phi);
console.log(`2 + 3 = ${plus(2, 3)}`);
console.log(`2 - 3 = ${minus(2, 3)}`);
console.log(`2 / 3 = ${divide(2, 3)}`);
console.log(`2 * 3 = ${multiply(2, 3)}`);

console.log(`2 + 3 = ${math.plus(2, 3)}`);
console.log(`2 - 3 = ${math.minus(2, 3)}`);
console.log(`2 / 3 = ${math.divide(2, 3)}`);
console.log(`2 * 3 = ${math.multiply(2, 3)}`);

console.log(`2 + 3 = ${penambahan(2, 3)}`);

console.log(`2 + 3 = ${mathCjs.plus(2, 3)}`);
