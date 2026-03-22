import type { FC } from 'react';
import { type SubmitHandler, FormProvider, useForm } from 'react-hook-form';
import { ActionButton } from 'shared/ui/ActionButton.tsx';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { type SignUpFormValues, signUpSchema } from '../model/schema';
import { defaultValuesSignUp, signUpFields } from '../model/formConfig';
import { FieldRow } from 'shared/lib/forms';

type FormData = z.infer<typeof signUpSchema>;

export const SignUpForm: FC = () => {
  const methods = useForm<FormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: defaultValuesSignUp,
    mode: 'onBlur',
  });
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit: SubmitHandler<SignUpFormValues> = (data) => console.log(data);

  return (
    <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="grid gap-4">
            {signUpFields.map((f) => (
              <FieldRow key={f.name} formId={f.name} field={f} />
            ))}
          </div>
          <ActionButton
            type="submit"
            tone="info"
            active={true}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting…' : 'Sign Up'}
          </ActionButton>
        </form>
      </FormProvider>
    </div>
  );
};
