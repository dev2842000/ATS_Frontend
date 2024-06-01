import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import HomePage from '../Pages/HomePage/homePage.tsx';
import LoginPage from '../Pages/LoginPage/authPage.tsx';
import ProfilePage from '../Pages/ProfilePage/profilePage.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <HomePage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'profile', element: <ProfilePage /> },

    ],
  },
]);
