import { describe, it } from 'vitest';
import { validateName } from './validation';

describe('validateName', () => {
  it('Returns true on correct input (2 words, >3 characters)', () => {
    const name = 'Sergey Menski';
    expect(validateName(name)).toBe(true);
  });

  it('Returns error message on no input', () => {
    const name = '';
    expect(typeof validateName(name)).toBe('string');
  });

  it('Returns error message on wrong input (less than 2 words)', () => {
    const name = 'Sergey';
    expect(typeof validateName(name)).toBe('string');
  });

  it('Returns error message on wrong input (more than 2 words)', () => {
    const name = 'Sergey Aleksy Valery';
    expect(typeof validateName(name)).toBe('string');
  });

  it('Returns error message on wrong input (less than 3 characters)', () => {
    const name = 'Sergey B';
    expect(typeof validateName(name)).toBe('string');
  });
});
