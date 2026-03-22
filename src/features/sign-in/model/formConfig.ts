import type { FieldConfig } from 'shared/lib/forms';
import type { SignInFormValues } from './schema';

export const signInFields: Array<FieldConfig<SignInFormValues>> = [
  {
    name: 'email',
    fieldComponentName: 'email',
    label: 'Email',
  },
  {
    name: 'password',
    fieldComponentName: 'password',
    label: 'Password',
  },
];

export const defaultValuesSignUp = {
  email: '',
  password: '',
} satisfies SignInFormValues;
