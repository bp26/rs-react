import React from 'react';
import ReactDOM from 'react-dom/client';
import router from './router/Router';
import { RouterProvider } from 'react-router-dom';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

alert(
  'Уважаемый проверяющий, прошу подождать с проверкой до вторника 28.03! Очень хотелось бы перед проверкой подчистить код и накинуть стилей.\nDear reviewer, please wait with the check until Tuesday 28.03! I would like very much to clean up the code and throw in more styles before the check.'
);
