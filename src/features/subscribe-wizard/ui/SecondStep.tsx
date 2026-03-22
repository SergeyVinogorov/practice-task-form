import { ActionButton } from 'shared/ui/ActionButton.tsx';
import type { FC } from 'react';
import type { WizardState } from '../types';

interface Props {
  state: WizardState;
  isPending: boolean;
}
export const SecondStep: FC<Props> = ({ state, isPending }) => {
  return (
    <div>
      <div className="rounded-lg border bg-white p-4">
        <div className="text-sm text-gray-600">Step 2 of 2</div>
        <div className="mt-1 text-sm font-semibold text-gray-900">
          Confirm subscription for:
        </div>
        <div className="mt-1 font-mono text-sm text-gray-800">
          {state.email}
        </div>
      </div>

      <div className="flex items-center justify-between pt-4">
        <ActionButton
          type="submit"
          name="intent"
          value="back"
          disabled={isPending}
        >
          Back
        </ActionButton>

        <ActionButton
          type="submit"
          name="intent"
          value="confirm"
          className="bg-gray-900 text-white ring-gray-900 hover:bg-gray-900"
          disabled={isPending}
        >
          {isPending ? 'Submitting…' : 'Confirm'}
        </ActionButton>
      </div>
    </div>
  );
};
