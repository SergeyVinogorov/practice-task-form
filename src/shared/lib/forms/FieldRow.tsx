import { useFormContext } from 'react-hook-form';
import type { FieldValues, Path } from 'react-hook-form';

import { FormField } from 'shared/ui/form';

import { getErrorMessage } from './getErrorMessage';
import { fieldRegistry } from './registry';
import type { FieldConfig } from './types';

export function FieldRow<TValues extends FieldValues>({
  formId,
  field,
}: {
  formId: string;
  field: FieldConfig<TValues>;
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext<TValues>();

  const error = getErrorMessage(errors, String(field.name));
  const Input = fieldRegistry[field.fieldComponentName];

  return (
    <div>
      <FormField label={field.label} htmlFor={formId} error={error}>
        <Input
          id={formId}
          placeholder={field.placeholder}
          hasError={Boolean(error)}
          {...register(field.name as Path<TValues>)}
        />
      </FormField>
    </div>
  );
}
