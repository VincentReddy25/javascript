// Named
import { add, sub } from './math.js'

console.log(add(2, 3));


import * as math from './math.js'

console.log(math.add(2, 4));


// Default
import something from './math.js'

console.log(something());
