import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('accepts binary digits', () => {
  assert.equal(api.isValidRadixInteger('1010', 2), true);
});
test('accepts hex letters', () => {
  assert.equal(api.isValidRadixInteger('FF', 16), true);
});
test('rejects digit outside radix', () => {
  assert.equal(api.isValidRadixInteger('102', 2), false);
});
test('accepts signed numeral', () => {
  assert.equal(api.isValidRadixInteger('-ff', 16), true);
});
test('rejects empty digits', () => {
  assert.equal(api.isValidRadixInteger('+', 10), false);
});
test('rejects invalid radix', () => {
  assert.throws(() => api.isValidRadixInteger('1', 1), RangeError);
});
