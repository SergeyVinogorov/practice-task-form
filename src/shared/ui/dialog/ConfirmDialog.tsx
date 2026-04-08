import { useEffect, useRef } from 'react';
import { useTheme } from '../../lib/themeContext';

export type ConfirmDialogProps = {
  title: string;
  description?: string;
  onConfirm: () => void;
  onCancel: () => void;
};

export function ConfirmDialog({
  title,
  description,
  onConfirm,
  onCancel,
}: ConfirmDialogProps) {
  const { theme } = useTheme();
  const confirmRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    confirmRef.current?.focus();
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onCancel();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onCancel]);

  const panel =
    theme === 'dark'
      ? 'bg-slate-900 text-white border border-white/10'
      : 'bg-white text-slate-900 border border-black/10';

  return (
    <div
      className="fixed inset-0 z-[10000] grid place-items-center bg-black/40 p-4"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onCancel();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="confirm-title"
        className={['w-full max-w-md rounded-xl p-4 shadow-2xl', panel].join(
          ' '
        )}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <h2 id="confirm-title" className="text-base font-semibold">
          {title}
        </h2>
        {description ? (
          <p className="mt-2 text-sm opacity-80">{description}</p>
        ) : null}

        <div className="mt-4 flex justify-end gap-2">
          <button
            onClick={onCancel}
            className="rounded-lg border border-black/10 bg-white px-3 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50"
          >
            Cancel
          </button>
          <button
            ref={confirmRef}
            onClick={onConfirm}
            className="rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
