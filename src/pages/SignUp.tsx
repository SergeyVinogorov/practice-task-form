import type { FC } from 'react';
import { SignUpForm } from 'features';

export const SignUp: FC = () => {
  return (
    <div className="flex h-full min-h-screen w-3xl flex-col items-center justify-center rounded-xl border bg-gray-100 p-6 shadow-sm">
      <h1 className="pb-4 text-lg font-semibold text-gray-900">Sign up</h1>
      <SignUpForm />
    </div>
  );
};
