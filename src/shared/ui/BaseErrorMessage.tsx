import type { FC } from 'react';
interface Props {
  errorMessage?: string | null;
}
export const BaseErrorMessage: FC<Props> = ({ errorMessage }) => {
  return (
    <div className="rounded-lg border border-red-200 bg-red-50 p-6 text-center text-sm text-red-700">
      Failed to load tasks{errorMessage ? `: ${errorMessage}` : '.'}
    </div>
  );
};

export const BaseErrorInputMessage: FC<Props> = ({ errorMessage }) => {
  return <p className="mt-1 text-xs text-red-500">{errorMessage}</p>;
};
