import type { FC } from 'react';
import { type SubmitHandler, FormProvider, useForm } from 'react-hook-form';
import { ActionButton } from 'shared/ui/ActionButton.tsx';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { type SignInFormValues, signInSchema } from '../model/schema';
import { defaultValuesSignUp, signInFields } from '../model/formConfig';
import { FieldRow } from 'shared/lib/forms';
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router-dom';
import type { LocationState } from 'shared/model/auth';
import { useAuth } from 'shared/lib/authContext';
import { apiLogin } from 'features/sign-in/api.ts';
import { ROUTES } from 'shared/constants/routes.ts';

type FormData = z.infer<typeof signInSchema>;

export const SignInForm: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationState | null;

  const { login, isLoading } = useAuth();

  const fromPath = state?.from?.pathname ?? ROUTES.PROFILE;

  const methods = useForm<FormData>({
    resolver: zodResolver(signInSchema),
    defaultValues: defaultValuesSignUp,
    mode: 'onBlur',
  });
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit: SubmitHandler<SignInFormValues> = async (data) => {
    try {
      const token = await apiLogin(data.email, data.password);
      await login(token);
      navigate(fromPath, { replace: true });
    } catch (err) {
      console.error('Error:', err);
    }
  };

  return (
    <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="grid gap-4">
            {signInFields.map((f) => (
              <FieldRow key={f.name} formId={f.name} field={f} />
            ))}
          </div>
          <ActionButton
            type="submit"
            tone="info"
            active={true}
            disabled={isSubmitting}
          >
            {isSubmitting || isLoading ? 'Submitting…' : 'Sign in'}
          </ActionButton>
        </form>
      </FormProvider>
    </div>
  );
};
