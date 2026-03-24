import React, { useRef, useState } from 'react';
import { FormField, TextInput } from 'shared/ui/form';

export const DebouncedLogger = () => {
  const [value, setValue] = useState('');
  const timeoutId = useRef<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const next = e.target.value;
    setValue(next);

    if (timeoutId.current !== null) {
      clearTimeout(timeoutId.current);
    }

    timeoutId.current = setTimeout(() => {
      console.log('debounced:', next);
    }, 1000);
  };

  return (
    <FormField label="Debounced logger" htmlFor="debounce">
      <TextInput id="debounce" value={value} onChange={handleChange} />
    </FormField>
  );
};
