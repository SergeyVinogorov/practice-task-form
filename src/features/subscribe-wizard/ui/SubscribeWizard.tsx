import { useActionState, type FC } from 'react';

import { BaseErrorMessage } from 'shared';
import { FirstStep } from 'features/subscribe-wizard/ui/FirstStep.tsx';
import { SecondStep } from 'features/subscribe-wizard/ui/SecondStep.tsx';
import { ThirdStep } from 'features/subscribe-wizard/ui/ThirdStep.tsx';
import type { WizardState } from '../types';
import { subscribeAction } from '../lib/subscribeAction';

const initialState: WizardState = {
  step: 1,
  email: '',
  status: 'idle',
};

export const SubscribeWizard: FC = () => {
  const [state, formAction, isPending] = useActionState(
    subscribeAction,
    initialState
  );

  return (
    <div className="space-y-4">
      <form action={formAction} className="space-y-4">
        {state.step === 1 ? (
          <FirstStep state={state} isPending={isPending} />
        ) : null}

        {state.step === 2 ? (
          <SecondStep state={state} isPending={isPending} />
        ) : null}

        {state.step === 3 ? <ThirdStep state={state} /> : null}
      </form>

      {state.status === 'error' && state.step !== 1 ? (
        <BaseErrorMessage errorMessage={state.message} />
      ) : null}
    </div>
  );
};
