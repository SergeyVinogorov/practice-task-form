import type { FC } from 'react';
import type { WizardState } from '../types';

interface Props {
  state: WizardState;
}
export const ThirdStep: FC<Props> = ({ state }) => {
  return (
    <div
      className="rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800"
      role="status"
    >
      {state.message ?? 'Success.'}
    </div>
  );
};
