import { RouterProvider } from 'react-router-dom';
import { appRouter } from './router';
import {
  ConfirmProvider,
  ErrorBoundary,
  ErrorFallback,
  ThemeProvider,
} from 'shared';
import { AuthProvider } from 'shared/ui/AuthProvider';

export const App = () => {
  return (
    <ErrorBoundary fallback={<ErrorFallback />}>
      <AuthProvider>
        <ThemeProvider>
          <ConfirmProvider>
            <RouterProvider router={appRouter} />
          </ConfirmProvider>
        </ThemeProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
};
