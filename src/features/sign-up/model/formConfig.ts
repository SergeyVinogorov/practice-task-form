import type { FieldConfig } from 'shared/lib/forms';
import type { SignUpFormValues } from './schema';

export const signUpFields: Array<FieldConfig<SignUpFormValues>> = [
  {
    name: 'username',
    fieldComponentName: 'text',
    label: 'Username',
  },
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
  {
    name: 'confirmPassword',
    fieldComponentName: 'password',
    label: 'Confirm password',
  },
];

export const defaultValuesSignUp = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
} satisfies SignUpFormValues;
