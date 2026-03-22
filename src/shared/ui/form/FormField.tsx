import type { FC, ReactNode } from 'react';
import { BaseErrorInputMessage } from '../BaseErrorMessage';
import { BaseLabel } from './BaseLabel';

type Props = {
  label: string;
  htmlFor: string;
  error?: string;
  children: ReactNode;
};

export const FormField: FC<Props> = ({ label, htmlFor, error, children }) => {
  return (
    <div className="space-y-1.5">
      <BaseLabel label={label} htmlFor={htmlFor} />
      {children}
      {error ? <BaseErrorInputMessage errorMessage={error} /> : null}
    </div>
  );
};
