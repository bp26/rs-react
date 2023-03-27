import { describe, it } from 'vitest';
import { validateSwitcher } from './validation';

describe('validateSwitcher', () => {
  const setState = () => {
    return;
  };

  it('Returns true on any chosen option', () => {
    const firstOption = true;
    const secondOption = false;
    expect(validateSwitcher(firstOption, secondOption, setState)).toBe(true);
  });

  it('Returns true on not chosen options', () => {
    const firstOption = false;
    const secondOption = false;
    expect(validateSwitcher(firstOption, secondOption, setState)).toBe(false);
  });
});
