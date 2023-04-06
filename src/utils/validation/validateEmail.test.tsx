import { describe, it } from 'vitest';
import { validateEmail } from './validation';

describe('validateEmail', () => {
  it('Returns true on correct input', () => {
    const email = 'bereza@gmail.com';
    expect(validateEmail(email)).toBe(true);
  });

  it('Returns error message on no input', () => {
    const email = '';
    expect(typeof validateEmail(email)).toBe('string');
  });

  it('Returns error message on wrong input', () => {
    const email = 'bereza.com';
    expect(typeof validateEmail(email)).toBe('string');
  });
});
