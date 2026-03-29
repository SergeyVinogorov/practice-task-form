import { RouterProvider } from 'react-router-dom';
import { appRouter } from './router';
import { ErrorBoundary, ErrorFallback } from 'shared';
import { AuthProvider } from 'shared/ui/AuthProvider';

export const App = () => {
  return (
    <ErrorBoundary fallback={<ErrorFallback />}>
      <AuthProvider>
        <RouterProvider router={appRouter} />
      </AuthProvider>
    </ErrorBoundary>
  );
};
