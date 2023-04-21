import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, it } from 'vitest';
import CardsList from './CardsList';
import characters from '../../assets/data/characters';

describe('CardsList', () => {
  const openModal = () => {};
  it('Renders card image', () => {
    render(<CardsList cards={characters} openModal={openModal} />);
    const items = screen.getAllByTestId('cardsList-item');
    expect(items.length === characters.length);
  });
});
