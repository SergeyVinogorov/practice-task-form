import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../lib/authContext';
import { ROUTES } from 'shared/constants/routes.ts';

export const ProtectedRoute = () => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to={ROUTES.SIGN_IN} replace state={{ from: location }} />;
  }

  return <Outlet />;
};
