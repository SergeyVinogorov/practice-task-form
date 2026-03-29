import { type FC, useId } from 'react';
import { type SubmitHandler, FormProvider, useForm } from 'react-hook-form';
import { ActionButton } from 'shared/ui/ActionButton.tsx';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { type SignUpFormValues, signUpSchema } from '../model/schema';
import { defaultValuesSignUp, signUpFields } from '../model/formConfig';
import { FieldRow } from 'shared/lib/forms';
import { SocialLinks } from 'features/sign-up/ui/SocialLinks.tsx';
import type { UserMe } from 'shared/model/auth.ts';
import { apiRegister } from 'features/sign-up/api.ts';
import { apiLogin } from 'features/sign-in/api.ts';
import { useAuth } from 'shared/lib/authContext.ts';
import { useNavigate } from 'react-router';
import { ROUTES } from 'shared/constants/routes.ts';

type FormData = z.infer<typeof signUpSchema>;

export const SignUpForm: FC = () => {
  const formId = useId();
  const navigate = useNavigate();

  const { login, isLoading } = useAuth();
  const methods = useForm<FormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: defaultValuesSignUp,
    mode: 'onBlur',
  });
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = methods;

  const onSubmit: SubmitHandler<SignUpFormValues> = async (data) => {
    try {
      const payload: UserMe = {
        email: data.email,
        password: data.password,
        name: data.username,
        avatarPath: 'https://i.pravatar.cc/500?img=13',
        about: 'Администратор',
        phone: '+79999999999',
        roles: ['USER'],
      };

      const registerRespToken = await apiRegister(payload);

      const token =
        registerRespToken ?? (await apiLogin(payload.email, payload.password));

      await login(token);

      navigate(ROUTES.PROFILE, { replace: true });
    } catch (err) {
      console.error('Error:', err);
    }
  };

  return (
    <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="grid gap-4">
            {signUpFields.map((f) => (
              <FieldRow key={f.name} formId={f.name} field={f} />
            ))}
          </div>
          <SocialLinks
            control={control}
            errors={errors}
            register={register}
            formId={formId}
          />
          <ActionButton
            type="submit"
            tone="info"
            active={true}
            disabled={isSubmitting || isLoading}
          >
            {isSubmitting ? 'Submitting…' : 'Sign Up'}
          </ActionButton>
        </form>
      </FormProvider>
    </div>
  );
};
