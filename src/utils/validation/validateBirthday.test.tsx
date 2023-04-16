import { describe, it } from 'vitest';
import { validateBirthday } from './validation';

describe('validateBirthday', () => {
  it('Returns true on correct input', () => {
    const date = '2023-03-09';
    expect(validateBirthday(date)).toBe(true);
  });

  it('Returns error message on no input', () => {
    const date = '';
    expect(typeof validateBirthday(date)).toBe('string');
  });

  it('Returns error message on later date than the current one', () => {
    const date = '2030-04-09';
    expect(typeof validateBirthday(date)).toBe('string');
  });
});
