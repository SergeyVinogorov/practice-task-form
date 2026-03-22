import type { FC } from 'react';

interface Props {
  label: string;
  htmlFor: string;
}
export const BaseLabel: FC<Props> = ({ label, htmlFor }) => {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-sm font-medium text-gray-700"
    >
      {label}
    </label>
  );
};
