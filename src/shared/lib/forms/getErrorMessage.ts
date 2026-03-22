import type { FieldErrors, FieldValues } from 'react-hook-form';

export function getErrorMessage<TValues extends FieldValues>(
  errors: FieldErrors<TValues>,
  path: keyof TValues
): string | undefined {
  const currentError = errors[path];
  const msg = currentError?.message;
  return typeof msg === 'string' ? msg : undefined;
}
