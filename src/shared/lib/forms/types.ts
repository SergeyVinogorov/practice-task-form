import type { FieldValues, Path } from 'react-hook-form';

export type FieldComponentName = 'text' | 'email' | 'password';

export type FieldConfig<TValues extends FieldValues> = {
  name: Path<TValues>;
  fieldComponentName: FieldComponentName;
  label: string;
  placeholder?: string;
};
