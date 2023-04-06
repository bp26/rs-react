import { describe, it } from 'vitest';
import { validateFile } from '../validation';

describe('validateFile', () => {
  const randomFile = new File(['file'], 'file.txt', {
    type: 'text/plain',
  });
  const image = new File(['image'], 'image.jpeg', {
    type: 'image/jpeg',
  });
  const input = document.createElement('input');
  input.setAttribute('type', 'file');

  it('Returns error message on no file', () => {
    const fileList = Object.create(input.files);
    fileList[0] = null;

    expect(typeof validateFile(fileList)).toBe('string');
  });

  it('Returns error message on wrong format', () => {
    const fileList = Object.create(input.files);
    fileList[0] = randomFile;
    expect(typeof validateFile(fileList)).toBe('string');
  });

  it('Returns true on correct format', () => {
    const fileList = Object.create(input.files);
    fileList[0] = image;
    expect(validateFile(fileList)).toBe(true);
  });
});
