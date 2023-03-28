import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, it } from 'vitest';
import Card from './Card';

describe('Card', () => {
  it('Renders card image', () => {
    const item = {
      id: 8,
      name: 'Adjudicator Rick',
      status: 'Dead',
      species: 'Human',
      type: '',
      gender: 'Male',
      origin: { name: 'unknown', url: '' },
      location: { name: 'Citadel of Ricks', url: 'https://rickandmortyapi.com/api/location/3' },
      image: 'https://rickandmortyapi.com/api/character/avatar/8.jpeg',
      episode: ['https://rickandmortyapi.com/api/episode/28'],
      url: 'https://rickandmortyapi.com/api/character/8',
      created: '2017-11-04T20:03:34.737Z',
    };

    render(<Card item={item} />);

    const image = screen.getByTestId('card-image');
    const name = screen.getByTestId('card-name');

    expect(image).toHaveAttribute('src', item.image);
    expect(name).toHaveTextContent(item.name);
  });
});
