import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it } from 'vitest';
import Header from './Header';

describe('Header', () => {
  it('Render correct page name', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const main = screen.getByTestId('header-mainlink');
    const about = screen.getByTestId('header-aboutlink');
    const forms = screen.getByTestId('header-formslink');
    const name = screen.getByTestId('header-name');

    expect(name).toHaveTextContent('Main');

    fireEvent.click(about);
    expect(name).toHaveTextContent('About');

    fireEvent.click(forms);
    expect(name).toHaveTextContent('Forms');

    fireEvent.click(main);
    expect(name).toHaveTextContent('Main');
  });
});
