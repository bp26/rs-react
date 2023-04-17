import { Provider } from 'react-redux';
import React from 'react';
import { Store } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';

export const joinClassNames = (...arg: string[]) => arg.join(' ');

export const renderWithProvider = (component: React.ReactNode, store: Store) => {
  const wrapper = <Provider store={store}>{component}</Provider>;
  return render(wrapper);
};
