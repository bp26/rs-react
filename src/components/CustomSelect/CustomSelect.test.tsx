import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, it } from 'vitest';
import CustomSelect from './CustomSelect';

describe('CustomSelect', () => {
  const ref = React.createRef<HTMLSelectElement>();
  let error = '';
  const data = [
    {
      value: 'Chocolate',
      id: 1,
    },
    {
      value: 'Cake',
      id: 2,
    },
  ];

  it('Renders correct options', () => {
    render(<CustomSelect name="Sweets:" reference={ref} error={error} data={data} />);

    data.forEach((item) => {
      expect(screen.getByText(item.value)).toBeInTheDocument();
    });
  });

  it('Renders correct error', () => {
    error = 'Error';
    render(<CustomSelect name="Sweets:" reference={ref} error={error} data={data} />);

    expect(screen.getByText('Error')).toBeInTheDocument();
  });
});
