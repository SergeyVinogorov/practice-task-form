import { ActionButton } from 'shared/ui/ActionButton.tsx';
import { FormField, TextInput } from 'shared/ui/form';
import { useFieldArray } from 'react-hook-form';
import type { FC } from 'react';
import type { Control, FieldErrors, UseFormRegister } from 'react-hook-form';
import type { SignUpFormValues } from 'features/sign-up/model/schema.ts';
interface Props {
  control: Control<SignUpFormValues>;
  errors: FieldErrors<SignUpFormValues>;
  formId: string;
  register: UseFormRegister<SignUpFormValues>;
}
export const SocialLinks: FC<Props> = ({
  control,
  errors,
  formId,
  register,
}) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'socialLinks',
  });
  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-sm font-medium text-gray-700">Social links</h2>
          <p className="text-xs text-gray-500">Add any social link</p>
        </div>
        <ActionButton
          variant="button"
          type="button"
          onClick={() => append({ url: '' })}
        >
          + Add link
        </ActionButton>
      </div>

      <div className="space-y-3">
        {fields.map((field, index) => {
          const error = errors.socialLinks?.[index]?.url?.message;
          return (
            <div key={field.id} className="flex items-start gap-2">
              <div className="flex-1">
                <FormField
                  label={`Link #${index + 1}`}
                  htmlFor={`${formId}-social-${index}`}
                  error={error}
                >
                  <TextInput
                    id={`${formId}-social-${index}`}
                    placeholder="https://github.com/username"
                    hasError={Boolean(error)}
                    {...register(`socialLinks.${index}.url`)}
                  />
                </FormField>
              </div>

              <ActionButton
                variant="icon"
                tone="danger"
                type="button"
                aria-label={`Remove link #${index + 1}`}
                onClick={() => remove(index)}
                disabled={fields.length === 1}
                title={
                  fields.length === 1
                    ? 'At least one link is required'
                    : 'Remove'
                }
                className="mt-7"
              >
                ✕
              </ActionButton>
            </div>
          );
        })}
      </div>

      {typeof errors.socialLinks?.message === 'string' ? (
        <p className="text-xs text-red-600">{errors.socialLinks.message}</p>
      ) : null}
    </section>
  );
};
