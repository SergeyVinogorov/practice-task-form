import type { AsyncSaveState } from '../types';
import { useActionState, useEffect, useState } from 'react';
import { wait } from '../lib/wait';
import { BaseErrorInputMessage } from 'shared/ui/BaseErrorMessage.tsx';
import { ActionButton } from 'shared/ui/ActionButton.tsx';
import { AsyncSaveSchema } from '../model/schema';
const initialState: AsyncSaveState = { status: 'idle' };

export function FormWithAsyncSave() {
  const [state, submit, isPending] = useActionState(
    async (
      _prev: AsyncSaveState,
      formData: FormData
    ): Promise<AsyncSaveState> => {
      const valueObj = { value: String(formData.get('value') ?? '').trim() };

      const parsed = AsyncSaveSchema.safeParse(valueObj);
      if (!parsed.success) {
        return {
          status: 'error',
          message: parsed.error.issues[0]?.message ?? 'Invalid value',
        };
      }

      await wait(1000);

      return initialState;
    },
    initialState
  );

  const [savedFlash, setSavedFlash] = useState(false);

  useEffect(() => {
    if (!isPending && state.status === 'idle') {
      setSavedFlash(true);
      const t = window.setTimeout(() => setSavedFlash(false), 900);
      return () => window.clearTimeout(t);
    }
  }, [isPending, state.status]);

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-4">
      <h3 className="text-lg font-semibold">FormWithAsyncSave</h3>

      <form action={submit} className="mt-3 grid max-w-md gap-3">
        <label className="grid gap-1">
          <span className="text-sm font-medium text-slate-700">Value</span>
          <input
            name="value"
            placeholder="Type something..."
            className="rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-slate-900"
          />
        </label>
        {state.status === 'error' ? (
          <BaseErrorInputMessage errorMessage={state.message} />
        ) : null}

        <ActionButton
          type="submit"
          tone="info"
          active={true}
          disabled={isPending}
        >
          {isPending ? 'Saving…' : savedFlash ? 'Saved!' : 'Save'}
        </ActionButton>
      </form>
    </section>
  );
}
