import { render, screen } from '@testing-library/react';
import React from 'react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { describe, it } from 'vitest';
import { routerConfig } from './Router';

describe('Router', () => {
  it('Renders errorPage on unknown route', () => {
    const router = createMemoryRouter(routerConfig, {
      initialEntries: ['/unknown'],
    });
    render(<RouterProvider router={router} />);
    expect(screen.getByText('404')).toBeInTheDocument();
  });
});
