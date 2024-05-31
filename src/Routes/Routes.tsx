import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import HomePage from '../Pages/HomePage/homePage.tsx';
import LoginPage from '../Pages/LoginPage/loginPage.tsx';
import RegisterPage from '../Pages/RegisterPage/registerPage.tsx';
import ProfilePage from '../Pages/ProfilePage/profilePage.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <HomePage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'register', element: <RegisterPage /> },
      { path: 'profile', element: <ProfilePage /> },

    ],
  },
]);
