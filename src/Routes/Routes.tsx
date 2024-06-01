import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import HomePage from '../Pages/HomePage/homePage';
import LoginPage from '../Pages/LoginPage/authPage';
import ProfilePage from '../Pages/ProfilePage/profilePage';
import ProtectedRoute from '../Utils/ProtectedRoute';
import { AuthProvider } from '../Utils/AuthContext';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <AuthProvider>
        <App />
      </AuthProvider>
    ),
    children: [
      { path: '', element: <HomePage /> },
      { path: 'login', element: <LoginPage /> },
      {
        path: 'profile',
        element: (
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
