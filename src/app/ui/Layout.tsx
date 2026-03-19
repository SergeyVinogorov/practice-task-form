import { type FC, Suspense } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import clsx from 'clsx';
import { ROUTES } from 'shared';

export const Layout: FC = () => {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    clsx(
      'rounded-md px-3 py-2 text-sm font-medium transition',
      isActive ? 'bg-gray-900 text-white' : 'text-gray-700 hover:bg-gray-50'
    );

  return (
    <div className="flex min-h-dvh flex-col bg-gray-50">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <Link to={ROUTES.HOME}>
            <div className="flex items-center gap-2">
              <div className="grid h-9 w-9 place-items-center rounded-lg bg-gray-900 text-sm font-semibold text-white">
                F
              </div>
              <div className="leading-tight">
                <div className="text-sm font-semibold text-gray-900">
                  Form manager
                </div>
              </div>
            </div>
          </Link>

          <nav className="flex items-center gap-2">
            <NavLink to={ROUTES.HOME} end className={linkClass}>
              Home
            </NavLink>
            <NavLink to={ROUTES.PROFILE} className={linkClass}>
              Profile
            </NavLink>
            <NavLink to={ROUTES.SIGN_IN} className={linkClass}>
              Sign in
            </NavLink>
            <NavLink to={ROUTES.SIGN_UP} className={linkClass}>
              Sign up
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="mx-auto h-full min-h-screen max-w-5xl px-4 py-6">
        <Suspense fallback={<div>Loading…</div>}>
          <Outlet />
        </Suspense>
      </main>

      <footer className="border-t bg-white">
        <div className="mx-auto max-w-5xl px-4 py-4 text-xs text-gray-500">
          © {new Date().getFullYear()} Form manager
        </div>
      </footer>
    </div>
  );
};
