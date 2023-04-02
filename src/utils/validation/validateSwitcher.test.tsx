import { describe, it } from 'vitest';
import { validateSwitcher } from './validation';

describe('validateSwitcher', () => {
  it('Returns true on any chosen option', () => {
    const value = 'Any';
    expect(validateSwitcher(value)).toBe(true);
  });

  it('Returns error message on not chosen options', () => {
    const value = '';
    expect(typeof validateSwitcher(value)).toBe('string');
  });
});
