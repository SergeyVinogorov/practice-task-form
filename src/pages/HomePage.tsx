import type { FC } from 'react';
import { ClickTimer } from 'features/refExample/ClickTimer.tsx';
import { PreviousInput } from 'features/refExample/PreviousInput.tsx';
import { FocusTracker } from 'features/refExample/FocusTracker.tsx';
import { DebouncedLogger } from 'features/refExample/DebouncedLogger.tsx';

export const HomePage: FC = () => {
  return (
    <div className="h-full w-xl rounded-xl border bg-white p-6 shadow-sm">
      <h1 className="text-lg font-semibold text-gray-900">Home</h1>
      <p className="mt-2 text-sm text-gray-600">Welcome. Home page.</p>
      <hr className="my-4 border-gray-300 dark:border-gray-700" />
      <h2 className="pb-2">ClickTimer</h2>
      <ClickTimer />
      <hr className="my-4 border-gray-300 dark:border-gray-700" />
      <h2 className="pb-2">PreviousInput</h2>
      <PreviousInput />
      <hr className="my-4 border-gray-300 dark:border-gray-700" />
      <h2 className="pb-2">FocusTracker</h2>
      <FocusTracker />
      <hr className="my-4 border-gray-300 dark:border-gray-700" />
      <h2 className="pb-2">DebouncedLogger</h2>
      <DebouncedLogger />
    </div>
  );
};
