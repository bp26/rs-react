import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainPage from '../pages/MainPage/MainPage';
import App from '../app/App';
import AboutPage from '../pages/AboutPage/AboutPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <MainPage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
    ],
  },
]);

export default router;
