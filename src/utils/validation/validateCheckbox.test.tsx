import { describe, it } from 'vitest';
import { validateCheckbox } from './validation';

describe('validateCheckbox', () => {
  it('Returns true on checked true', () => {
    const checked = true;
    expect(validateCheckbox(checked)).toBe(true);
  });

  it('Returns error message on checked false', () => {
    const checked = false;
    expect(typeof validateCheckbox(checked)).toBe('string');
  });
});
