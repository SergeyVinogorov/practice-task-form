import { ActionButton } from 'shared/ui/ActionButton.tsx';
import { useActionState, useEffect, useState } from 'react';
import { wait } from '../lib/wait';
import type { ActionState, ActionValues } from '../types';
import { validateActionStateSchema } from '../model/schema';
import { Field } from './Field';
import { BaseErrorInputMessage } from 'shared';

const initialState: ActionState = {
  values: { firstName: '', lastName: '', email: '' },
  dirty: false,
  status: 'idle',
};

export function ActionStateWithReducer() {
  const [state, submit, isPending] = useActionState(
    async (prev: ActionState, formData: FormData): Promise<ActionState> => {
      const next: ActionValues = {
        firstName: String(formData.get('firstName') ?? ''),
        lastName: String(formData.get('lastName') ?? ''),
        email: String(formData.get('email') ?? ''),
      };

      const parsed = validateActionStateSchema.safeParse(next);
      if (!parsed.success) {
        return {
          ...prev,
          values: next,
          dirty: true,
          status: 'error',
          message: parsed.error.issues[0]?.message ?? 'Invalid form',
        };
      }

      await wait(900);

      return initialState;
    },
    initialState
  );

  const [savedFlash, setSavedFlash] = useState(false);

  useEffect(() => {
    if (!isPending && state.status === 'idle' && state.dirty === false) {
      setSavedFlash(true);
      const tId = setTimeout(() => setSavedFlash(false), 900);
      return () => clearTimeout(tId);
    }
  }, [isPending, state.status, state.dirty]);

  return (
    <section className="mt-4 rounded-xl border border-slate-200 bg-white p-4">
      <h3 className="text-lg font-semibold">ActionStateWithReducer</h3>

      <form action={submit} className="mt-3 grid max-w-xl gap-3">
        <Field
          label="First name"
          name="firstName"
          defaultValue={state.values.firstName}
        />
        <Field
          label="Last name"
          name="lastName"
          defaultValue={state.values.lastName}
        />
        <Field label="Email" name="email" defaultValue={state.values.email} />

        {state.status === 'error' ? (
          <BaseErrorInputMessage errorMessage={state.message} />
        ) : null}
        <ActionButton
          type="submit"
          tone="info"
          active={true}
          disabled={isPending}
        >
          {isPending ? 'Submitting…' : savedFlash ? 'Saved!' : 'Submit'}
        </ActionButton>
      </form>
    </section>
  );
}
