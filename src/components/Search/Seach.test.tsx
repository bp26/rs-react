import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { describe, it } from 'vitest';
import Search from './Search';

describe('Search', () => {
  it('Renders card image', () => {
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
});
