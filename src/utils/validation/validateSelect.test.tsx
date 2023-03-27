import { describe, it } from 'vitest';
import { validateSelect } from './validation';

describe('validateSelect', () => {
  const setState = () => {
    return;
  };

  it('Returns false on `Choose an option` value', () => {
    const value = 'Choose an option';
    expect(validateSelect(value, setState)).toBe(false);
  });

  it('Returns true on any other value', () => {
    const value = 'Any value';
    expect(validateSelect(value, setState)).toBe(true);
  });
});
