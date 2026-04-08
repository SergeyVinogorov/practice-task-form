import { ConfirmContext, type ShowOptions } from '../../lib/confimContext';
import { type ReactNode, useCallback, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { ConfirmDialog } from './ConfirmDialog';

type State = null | (ShowOptions & { resolve: (v: boolean) => void });

export function ConfirmProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<State>(null);
  const root = document.getElementById('dialog-root');

  const showConfirmDialog = useCallback((options: ShowOptions) => {
    return new Promise<boolean>((resolve) => setState({ ...options, resolve }));
  }, []);

  const close = useCallback((result: boolean) => {
    setState((prev) => {
      if (!prev) return null;
      prev.resolve(result);
      return null;
    });
  }, []);

  const value = useMemo(() => ({ showConfirmDialog }), [showConfirmDialog]);

  return (
    <ConfirmContext.Provider value={value}>
      {children}
      {root && state
        ? createPortal(
            <ConfirmDialog
              title={state.title}
              description={state.description}
              onCancel={() => close(false)}
              onConfirm={() => close(true)}
            />,
            root
          )
        : null}
    </ConfirmContext.Provider>
  );
}
