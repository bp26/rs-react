import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../pages/Main/Main';
import App from '../app/App';
import About from '../pages/About/About';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Main />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
]);

export default router;
