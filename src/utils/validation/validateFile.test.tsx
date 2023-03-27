import { describe, it } from 'vitest';
import { validateFile } from './validation';

describe('validateFile', () => {
  const setState = () => {
    return;
  };

  it('Returns false on no file', () => {
    const filepath = '';
    expect(validateFile(filepath, setState)).toBe(false);
  });

  it('Returns false on wrong format', () => {
    const filepath = 'C:\\Pictures\\Gif.gif';
    expect(validateFile(filepath, setState)).toBe(false);
  });

  it('Returns true on correct format', () => {
    const filepath = 'C:\\Pictures\\picture.png';
    expect(validateFile(filepath, setState)).toBe(true);
  });
});
