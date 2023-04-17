import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { describe, it } from 'vitest';
import { createStore } from '../../store/store';
import { renderWithProvider } from '../../utils/utils';
import Search from './Search';

describe('Search', () => {
  it('Saves search query on submit and returns on mount', () => {
    const store = createStore();
    const { unmount } = renderWithProvider(<Search />, store);
    const input = screen.getByTestId('search-input');
    const submit = screen.getByTestId('search-submit');
    fireEvent.input(input, {
      target: {
        value: '123456',
      },
    });
    fireEvent.click(submit);
    unmount();
    renderWithProvider(<Search />, store);
    expect(screen.getByTestId('search-input')).toHaveValue('123456');
  });

  it(`Doesn't save search query on change`, () => {
    const store = createStore();
    const { unmount } = renderWithProvider(<Search />, store);
    const input = screen.getByTestId('search-input');
    fireEvent.input(input, {
      target: {
        value: '123456',
      },
    });
    unmount();
    renderWithProvider(<Search />, store);
    expect(screen.getByTestId('search-input')).toHaveValue('');
  });
});
