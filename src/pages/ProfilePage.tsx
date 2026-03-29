import { type FC, useEffect, useState } from 'react';
import { ROUTES } from 'shared/constants/routes.ts';
import { useAuth } from 'shared/lib/authContext';
import { useNavigate } from 'react-router';
import { ActionButton } from 'shared/ui/ActionButton.tsx';

export const ProfilePage: FC = () => {
  const navigate = useNavigate();
  const { user, isLoading, refresh, logout } = useAuth();
  const [localError, setLocalError] = useState<string | null>(null);
  useEffect(() => {
    if (!user) {
      refresh().catch((e) => {
        setLocalError(e instanceof Error ? e.message : 'Failed to load user');
      });
    }
  }, [user, refresh]);

  const handleLogout = () => {
    logout();
    navigate(ROUTES.SIGN_IN, { replace: true });
  };
  return (
    <div className="h-full rounded-xl border bg-white p-6 shadow-sm">
      <h1 className="text-lg font-semibold text-gray-900">Home</h1>
      <p className="mt-2 text-sm text-gray-600">Welcome. Profile page.</p>
      {isLoading ? <p>Loading user…</p> : null}
      {localError ? <p style={{ color: 'crimson' }}>{localError}</p> : null}

      {!isLoading && user?.name ? (
        <p>
          Hello, <b>{user.name}</b>
        </p>
      ) : null}

      <ActionButton
        onClick={handleLogout}
        style={{ marginTop: 16, padding: 10 }}
      >
        Log out
      </ActionButton>
    </div>
  );
};
