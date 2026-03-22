import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from 'react-router-dom';
import { Layout } from 'app/ui/Layout';
import { HomePage, ProfilePage, SignIn, SignUp, WizardPage } from 'pages';
import { ROUTES, RouteError } from 'shared';

export const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path={ROUTES.HOME}
      element={<Layout />}
      errorElement={<RouteError />}
    >
      <Route index element={<HomePage />} />
      <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
      <Route path={ROUTES.WIZARD} element={<WizardPage />} />
      <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
      <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
      <Route path="*" element={<Navigate to={ROUTES.PROFILE} replace />} />
    </Route>
  )
);
