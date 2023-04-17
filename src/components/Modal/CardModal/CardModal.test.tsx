import { screen, waitFor } from '@testing-library/react';
import React from 'react';
import { describe, it } from 'vitest';
import { createStore } from '../../../store/store';
import { renderWithProvider } from '../../../utils/utils';
import CardModal from './CardModal';
import { server } from '../../../mocks/server';

const closeModal = () => {};
let store = createStore();

describe('CardModal', () => {
  beforeEach(() => {
    server.listen();
  });

  afterEach(() => {
    server.close();
    store = createStore();
  });

  it('Renders card modal on existing id', () => {
    const cardId = 6;
    renderWithProvider(<CardModal closeModal={closeModal} cardId={cardId} />, store);
    waitFor(() => {
      const name = screen.findByTestId('cardmodal-name');
      expect(name).toBeInTheDocument();
    });
  });

  it('Renders error on non-existing id', () => {
    const cardId = 1;
    renderWithProvider(<CardModal closeModal={closeModal} cardId={cardId} />, store);
    waitFor(() => {
      const error = screen.findByTestId('cardmodal-error');
      expect(error).toBeInTheDocument();
    });
  });
});
