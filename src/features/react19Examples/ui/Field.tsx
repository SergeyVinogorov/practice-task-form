import type { ActionValues } from '../types';
import type { FC } from 'react';

interface Props {
  label: string;
  name: keyof ActionValues;
  defaultValue: string;
  placeholder?: string;
}

export const Field: FC<Props> = ({
  label,
  name,
  defaultValue,
  placeholder,
}) => {
  return (
    <label className="grid gap-1">
      <span className="text-sm font-medium text-slate-700">{label}</span>
      <input
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className="rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-slate-900"
      />
    </label>
  );
};
