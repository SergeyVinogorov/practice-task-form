import { FormField, TextInput } from 'shared/ui/form';
import { type ChangeEvent, useEffect, useRef, useState } from 'react';

export const PreviousInput = () => {
  const [value, setValue] = useState('');
  const prevValue = useRef('');
  useEffect(() => {
    prevValue.current = value;
  }, [value]);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };
  return (
    <FormField label={'Prev Input'} htmlFor={'prevInput'}>
      <TextInput name={'prevInput'} onChange={handleChange} />
      <p className="mt-2 text-sm text-gray-600">
        {/* eslint-disable-next-line react-hooks/refs */}
        Prev value: {prevValue.current || ''}
      </p>
    </FormField>
  );
};
