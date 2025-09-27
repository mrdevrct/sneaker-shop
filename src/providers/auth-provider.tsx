/* eslint-disable @typescript-eslint/no-explicit-any */
// providers/auth-provider.tsx
'use client';

import { ReactNode, createContext, useContext, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@/store';
import { logout } from '@/store/user/userSlice';
// Assume you have a function to check token validity, e.g., from libs/auth.ts

interface AuthContextType {
  isLoggedIn: boolean;
  user: any; // Adjust type
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const dispatch = useAppDispatch();
  const { isLoggedIn, user } = useAppSelector((state) => state.user);

  useEffect(() => {
    // Optionally validate token on mount
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    // Clear cookies or other auth stuff if needed
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, logout: handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};