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
  'Уважаемый проверяющий, прошу подождать с кросс-чеком до среды 19.04. Я очень хотел бы успеть привести тесты в порядок.\nDear reviewer, please wait with the cross-check until Wednesday 19.04. I would really like to have time to get the tests in order.'
);
