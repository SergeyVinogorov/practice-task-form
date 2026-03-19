import type { FC } from 'react';

export const HomePage: FC = () => {
  return (
    <div className="h-full rounded-xl border bg-white p-6 shadow-sm">
      <h1 className="text-lg font-semibold text-gray-900">Home</h1>
      <p className="mt-2 text-sm text-gray-600">Welcome. Home page.</p>
    </div>
  );
};
