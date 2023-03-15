import React from 'react';
import Router from 'react-router-dom';
import Main from './Main';
import App from './App';
import About from './About';
import ErrorPage from './ErrorPage';

const router = Router.createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
]);

export default router;
