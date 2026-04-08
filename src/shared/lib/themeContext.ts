import * as React from 'react';

export type Theme = 'light' | 'dark';

export const ThemeContext = React.createContext<{
  theme: Theme;
  toggle: () => void;
} | null>(null);

export function useTheme() {
  const ctx = React.useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used inside ThemeProvider');
  return ctx;
}
