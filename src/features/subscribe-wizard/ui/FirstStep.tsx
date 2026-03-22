import { FormField, TextInput } from 'shared/ui/form';
import { ActionButton } from 'shared/ui/ActionButton.tsx';
import type { FC } from 'react';
import type { WizardState } from '../types';

interface Props {
  state: WizardState;
  isPending: boolean;
}
export const FirstStep: FC<Props> = ({ state, isPending }) => {
  return (
    <div>
      <FormField
        label="Email"
        htmlFor="email"
        error={state.status === 'error' ? state.message : undefined}
      >
        <TextInput
          id="email"
          name="email"
          type="email"
          placeholder="name@example.com"
          defaultValue={state.email}
          disabled={isPending}
        />
      </FormField>

      <div className="flex justify-end pt-4">
        <ActionButton
          type="submit"
          name="intent"
          value="step1"
          className="bg-gray-900 text-white ring-gray-900 hover:bg-gray-900"
          disabled={isPending}
        >
          {isPending ? 'Checking…' : 'Next'}
        </ActionButton>
      </div>
    </div>
  );
};
