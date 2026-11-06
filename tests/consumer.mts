import * as api from '@lp-labs/integer-base-validator';
import { isValidRadixInteger } from '@lp-labs/integer-base-validator';
console.log(isValidRadixInteger('ff', 16));
// @ts-expect-error invalid argument must be rejected by declarations
api.isValidRadixInteger(10, 2);
