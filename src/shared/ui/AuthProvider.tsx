import {
  type ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { API_URLS, TOKEN_KEY } from 'shared';
import { apiRequest, extractUser } from '../lib/authExtraction';
import type { AuthContextValue, UserMe, User } from 'shared/model/auth';
import { AuthContext } from 'shared/lib/authContext';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(() =>
    localStorage.getItem(TOKEN_KEY)
  );
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const isAuth = !!token;

  const refresh = useCallback(async () => {
    if (!token) {
      setUser(null);
      return;
    }

    setIsLoading(true);
    try {
      const me = await apiRequest<UserMe>(API_URLS.me, {
        method: 'GET',
        token,
      });
      setUser(extractUser(me));
    } catch (e) {
      console.error(e);
      localStorage.removeItem(TOKEN_KEY);
      setToken(null);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }, [token]);

  const login = useCallback(async (token: string) => {
    localStorage.setItem(TOKEN_KEY, token);
    setToken(token);
    setIsLoading(true);
    try {
      const me = await apiRequest<UserMe>(API_URLS.me, {
        method: 'GET',
        token,
      });
      setUser(extractUser(me));
    } finally {
      setIsLoading(false);
    }
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(TOKEN_KEY);
    setToken(null);
    setUser(null);
  }, []);

  useEffect(() => {
    if (token) {
      refresh();
    } else {
      setUser(null);
    }
  }, [token, refresh]);

  const value = useMemo<AuthContextValue>(
    () => ({
      token,
      user,
      isLoggedIn: isAuth,
      isLoading,
      login,
      logout,
      refresh,
    }),
    [token, user, isAuth, isLoading, login, logout, refresh]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
