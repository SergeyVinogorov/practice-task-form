import type { FC } from 'react';
import { isRouteErrorResponse, useRouteError, Link } from 'react-router-dom';
import { ROUTES } from 'shared/constants/routes';

type Props = {
  status?: number;
  title?: string;
};

export const RouteError: FC<Props> = ({ status, title }) => {
  const err = useRouteError();

  const currentStatus =
    status ?? (isRouteErrorResponse(err) ? err.status : 500);
  const currentTitle =
    title ?? (status === 404 ? 'Not found ' : 'Unexpected error ');

  return (
    <main className="p-6">
      <h1 className="mt-0">
        {currentTitle} {currentStatus}
      </h1>
      <p>
        <Link to={ROUTES.HOME}>Go home</Link>
      </p>
    </main>
  );
};
