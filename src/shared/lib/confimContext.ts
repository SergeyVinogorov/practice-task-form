import { createContext, useContext } from 'react';

export type ShowOptions = { title: string; description?: string };

export const ConfirmContext = createContext<{
  showConfirmDialog: (o: ShowOptions) => Promise<boolean>;
} | null>(null);

export function useConfirmDialog() {
  const ctx = useContext(ConfirmContext);
  if (!ctx)
    throw new Error(
      'useConfirmDialog must be used inside ConfirmDialogProvider'
    );
  return ctx;
}
