import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

export const Logout = () => {
  const { setAuth } = useAuth();

  useEffect(() => {
    localStorage.removeItem('auth');
    setAuth({});
  }, []);
  return <Navigate to="/" replace />;
};
