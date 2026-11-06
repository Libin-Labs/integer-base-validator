export function isValidRadixInteger(value: string, radix: number): boolean {
  if (typeof value !== 'string' || !Number.isInteger(radix) || radix < 2 || radix > 36)
    throw new RangeError('Expected text and radix 2 through 36');
  const text = value.replace(/^[+-]/, '').toLowerCase();
  if (!text) return false;
  for (const char of text) {
    const digit = parseInt(char, 36);
    if (digit < 0 || digit >= radix || char !== digit.toString(36)) return false;
  }
  return true;
}
