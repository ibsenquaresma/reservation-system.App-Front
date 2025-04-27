// src/components/PublicRoute.tsx
import { Navigate } from 'react-router-dom';
import { ReactNode } from 'react';

const isAuthenticated = () => {
  return !!localStorage.getItem('accessToken');
};

interface PublicRouteProps {
  children: ReactNode;
}

export function PublicRoute({ children }: PublicRouteProps) {
  if (isAuthenticated()) {
    return <Navigate to="/home" replace />;
  }

  return <>{children}</>;
}
