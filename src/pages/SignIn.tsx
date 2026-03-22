import type { FC } from 'react';
import { SignInForm } from 'features';

export const SignIn: FC = () => {
  return (
    <div className="flex h-full min-h-screen w-3xl flex-col items-center justify-center rounded-xl border bg-gray-100 p-6 shadow-sm">
      <h1 className="pb-4 text-lg font-semibold text-gray-900">Sign in</h1>
      <SignInForm />
    </div>
  );
};
