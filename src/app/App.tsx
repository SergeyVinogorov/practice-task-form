import { RouterProvider } from 'react-router-dom';
import { appRouter } from './router';
import { ConfirmProvider, ErrorBoundary, ErrorFallback } from 'shared';
import { AuthProvider } from 'shared/ui/AuthProvider';

export const App = () => {
  return (
    <ErrorBoundary fallback={<ErrorFallback />}>
      <AuthProvider>
        <ConfirmProvider>
          <RouterProvider router={appRouter} />
        </ConfirmProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
};
