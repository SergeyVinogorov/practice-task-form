import { createContext, useContext } from 'react';
import type { AuthContextValue } from 'shared/model/auth';

export const AuthContext = createContext<AuthContextValue | null>(null);

export function useAuth() {
  const contextInfo = useContext(AuthContext);
  if (!contextInfo) {
    throw new Error('useAuth must be used inside <AuthProvider>');
  }
  return contextInfo;
}
