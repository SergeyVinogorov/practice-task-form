import { RouterProvider } from 'react-router-dom';
import { appRouter } from './router';
import { ErrorBoundary, ErrorFallback } from 'shared';

export const App = () => {
  return (
    <ErrorBoundary fallback={<ErrorFallback />}>
      <RouterProvider router={appRouter} />
    </ErrorBoundary>
  );
};
