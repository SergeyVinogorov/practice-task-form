import { forwardRef, type InputHTMLAttributes } from 'react';
import cx from 'clsx';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  hasError?: boolean;
};

export const TextInput = forwardRef<HTMLInputElement, Props>(
  ({ className, hasError = false, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cx(
          'h-10 w-full rounded-md border bg-white px-3 text-sm text-gray-900 shadow-sm outline-none',
          'placeholder:text-gray-400 focus:ring-2 focus:ring-offset-1',
          hasError
            ? 'border-red-300 focus:ring-red-200'
            : 'border-gray-200 focus:ring-gray-200',
          className
        )}
        {...props}
      />
    );
  }
);

TextInput.displayName = 'TextInput';
