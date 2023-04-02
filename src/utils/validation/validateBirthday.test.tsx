import { describe, it } from 'vitest';
import { validateBirthday } from './validation';

describe('validateBirthday', () => {
  const setState = () => {
    return;
  };

  it('Returns true on correct input', () => {
    const date = '2023-03-09';
    expect(validateBirthday(date, setState)).toBe(true);
  });

  it('Returns false on no input', () => {
    const date = '';
    expect(validateBirthday(date, setState)).toBe(false);
  });

  it('Returns false on later date than the current one', () => {
    const date = '2023-04-09';
    expect(validateBirthday(date, setState)).toBe(false);
  });
});
