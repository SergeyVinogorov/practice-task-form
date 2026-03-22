import { type ButtonHTMLAttributes, type FC } from 'react';
import clsx from 'clsx';

type ActionVariant = 'chip' | 'button' | 'icon';
type ActionTone = 'neutral' | 'danger' | 'info';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ActionVariant;
  tone?: ActionTone;
  active?: boolean; // for chips
  className?: string;
  type?: 'button' | 'submit';
};

const styles = {
  base:
    'inline-flex items-center justify-center gap-2 whitespace-nowrap select-none ' +
    'transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ' +
    'disabled:opacity-50 disabled:pointer-events-none cursor-pointer',
  variant: {
    chip: 'h-9 rounded-full px-3 text-sm font-medium ring-1',
    button: 'h-9 rounded-md px-3 text-sm font-medium ring-1',
    icon: 'h-9 w-9 rounded-md ring-1',
  },
  tone: {
    neutral: {
      base: 'text-gray-700 ring-gray-200 hover:bg-gray-50',
      active: 'bg-gray-900 text-white ring-gray-900 hover:bg-gray-900',
    },
    danger: {
      base: 'text-red-600 ring-red-200 hover:bg-red-50',
      active: 'bg-red-600 text-white ring-red-600 hover:bg-red-600',
    },
    info: {
      base: 'w-full rounded-md bg-blue-600 py-2 font-semibold text-white transition hover:bg-blue-700',
      active:
        'w-full rounded-md bg-blue-600 py-2 font-semibold text-white transition hover:bg-blue-700 active:scale-95 active:text-blue-700',
    },
  },
};

export const ActionButton: FC<Props> = ({
  className,
  variant = 'button',
  tone = 'neutral',
  active = false,
  type = 'button',
  ...props
}) => {
  const toneStyles = styles.tone[tone];
  return (
    <button
      type={type}
      className={clsx(
        styles.base,
        styles.variant[variant],
        active ? toneStyles.active : toneStyles.base,
        className
      )}
      {...props}
    />
  );
};
