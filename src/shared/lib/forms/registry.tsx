import React, { type FC } from 'react';
import type { FieldComponentName } from './types';

import { TextInput } from 'shared/ui/form';

type RegistryItemProps = {
  id: string;
  placeholder?: string;
  hasError: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

type Registry = Record<FieldComponentName, FC<RegistryItemProps>>;

export const fieldRegistry: Registry = {
  text: (props) => <TextInput {...props} type="text" />,
  email: (props) => <TextInput {...props} type="email" />,
  password: (props) => <TextInput {...props} type="password" />,
};
