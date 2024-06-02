import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (token: string, user: object) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return !!localStorage.getItem('token');
  });

  const login = (token: string, user: object) => {
    localStorage.setItem('token', JSON.stringify({token: token, user: user}));
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  useEffect(() => {
    try {
        const tokenData = localStorage.getItem('token');
        if (tokenData) {
            const parsedToken = JSON.parse(tokenData);
            setIsAuthenticated(!!parsedToken.token);
        } else {
            setIsAuthenticated(false);
        }
    } catch (error) {
        console.error("Failed to parse token from localStorage:", error);
        setIsAuthenticated(false);
    }
}, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
