import { describe, it } from 'vitest';
import { validateEmail } from './validation';

describe('validateEmail', () => {
  const setState = () => {
    return;
  };

  it('Returns true on correct input', () => {
    const email = 'bereza@gmail.com';
    expect(validateEmail(email, setState)).toBe(true);
  });

  it('Returns false on no input', () => {
    const email = '';
    expect(validateEmail(email, setState)).toBe(false);
  });

  it('Returns false on wrong input', () => {
    const email = 'bereza.com';
    expect(validateEmail(email, setState)).toBe(false);
  });
});
