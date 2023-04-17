import { fireEvent, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { describe, it } from 'vitest';
import { createStore } from '../../store/store';
import { renderWithProvider } from '../../utils/utils';
import { server } from '../../mocks/server';
import MainPage from './MainPage';

let store = createStore();

describe('MainPage', () => {
  beforeEach(() => {
    renderWithProvider(<MainPage />, store);
    server.listen();
  });

  afterEach(() => {
    server.close();
    store = createStore();
  });

  it('Renders cards on empty search', async () => {
    await waitFor(() => expect(screen.getAllByTestId('cardsList-item').length > 0).toBeTruthy());
  });

  it('Renders cards on existing search query', async () => {
    const searchBar = screen.getByTestId('search-input');
    const submit = screen.getByTestId('search-submit');
    fireEvent.input(searchBar, {
      target: {
        value: 'morty',
      },
    });
    fireEvent.click(submit);
    await waitFor(() => expect(screen.getAllByTestId('cardsList-item').length > 0).toBeTruthy());
  });

  it('Renders error on non-existing search query', async () => {
    const searchBar = screen.getByTestId('search-input');
    const submit = screen.getByTestId('search-submit');
    fireEvent.input(searchBar, {
      target: {
        value: 'fsdfsd',
      },
    });
    fireEvent.click(submit);
    await waitFor(() => expect(screen.getByTestId('mainpage-error')).toBeInTheDocument());
  });
});
