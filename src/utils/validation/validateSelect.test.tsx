import { describe, it } from 'vitest';
import { validateSelect } from './validation';

describe('validateSelect', () => {
  it('Returns error message on `Choose an option` value', () => {
    const value = 'Choose an option';
    expect(typeof validateSelect(value)).toBe('string');
  });

  it('Returns true on any other value', () => {
    const value = 'Any value';
    expect(validateSelect(value)).toBe(true);
  });
});
