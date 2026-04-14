import type { FC } from 'react';
import {
  ActionStateWithReducer,
  FormWithAsyncSave,
  SubscribeWizard,
  TodoListOptimistic,
} from 'features';
export const WizardPage: FC = () => {
  return (
    <div className="h-full rounded-xl border bg-white p-6 shadow-sm">
      <h1 className="text-lg font-semibold text-gray-900">Wizard demo</h1>
      <div className="mt-6">
        <SubscribeWizard />
      </div>
      <div className="mt-6">
        <ActionStateWithReducer />
      </div>
      <div className="mt-6">
        <FormWithAsyncSave />
      </div>
      <div className="mt-6">
        <TodoListOptimistic />
      </div>
    </div>
  );
};
