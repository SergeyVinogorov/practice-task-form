import type { FC } from 'react';
import { SubscribeWizard } from 'features';
export const WizardPage: FC = () => {
  return (
    <div className="h-full rounded-xl border bg-white p-6 shadow-sm">
      <h1 className="text-lg font-semibold text-gray-900">Wizard demo</h1>
      <div className="mt-6">
        <SubscribeWizard />
      </div>
    </div>
  );
};
