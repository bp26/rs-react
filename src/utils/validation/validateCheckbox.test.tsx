import { describe, it } from 'vitest';
import { validateCheckbox } from './validation';

describe('validateCheckbox', () => {
  const setState = () => {
    return;
  };

  it('Returns true on checked true', () => {
    const checked = true;
    expect(validateCheckbox(checked, setState)).toBe(true);
  });

  it('Returns false on checked false', () => {
    const checked = false;
    expect(validateCheckbox(checked, setState)).toBe(false);
  });
});
