import { describe, it } from 'vitest';
import { validateName } from './validation';

describe('validateName', () => {
  const setState = () => {
    return;
  };

  it('Returns true on correct input (2 words, >3 characters)', () => {
    const name = 'Sergey Menski';
    expect(validateName(name, setState)).toBe(true);
  });

  it('Returns false on no input', () => {
    const name = '';
    expect(validateName(name, setState)).toBe(false);
  });

  it('Returns false on wrong input (less than 2 words)', () => {
    const name = 'Sergey';
    expect(validateName(name, setState)).toBe(false);
  });

  it('Returns false on wrong input (more than 2 words)', () => {
    const name = 'Sergey Aleksy Valery';
    expect(validateName(name, setState)).toBe(false);
  });

  it('Returns false on wrong input (less than 3 characters)', () => {
    const name = 'Sergey B';
    expect(validateName(name, setState)).toBe(false);
  });
});
