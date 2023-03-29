import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { describe, it } from 'vitest';
import Search from './Search';

describe('Search', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('Saves input value on unmount and renders it on mount', () => {
    const { unmount } = render(<Search />);
    const input = screen.getByTestId('search-input');
    expect(input).toContainHTML('');
    fireEvent.input(input, {
      target: {
        value: '123456',
      },
    });
    unmount();
    render(<Search />);
    expect(screen.getByTestId('search-input')).toContainHTML('123456');
  });

  it(`Doesn't save input value to local storage on change`, () => {
    render(<Search />);
    const input = screen.getByTestId('search-input');
    fireEvent.input(input, {
      target: {
        value: '123456',
      },
    });

    expect(localStorage.getItem('query') === '123456').toBe(false);
  });
});
