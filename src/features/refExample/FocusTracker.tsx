import React, { useRef } from 'react';
import { ActionButton } from 'shared/ui/ActionButton';
import { FormField, TextInput } from 'shared/ui/form';

export const FocusTracker = () => {
  const firstRef = useRef<HTMLInputElement | null>(null);
  const secondRef = useRef<HTMLInputElement | null>(null);

  const counter = useRef(0);

  const focusFirst = () => {
    firstRef.current?.focus();
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    if (event.relatedTarget) {
      counter.current++;
      console.log('focus transitions:', counter.current);
    }
  };

  return (
    <div className="space-y-4">
      <FormField label="First input" htmlFor="first">
        <TextInput
          id="first"
          name="first"
          ref={firstRef}
          onFocus={handleFocus}
        />
      </FormField>

      <FormField label="Second input" htmlFor="second">
        <TextInput
          id="second"
          name="second"
          ref={secondRef}
          onFocus={handleFocus}
        />
      </FormField>

      <ActionButton onClick={focusFirst}>Focus first</ActionButton>
    </div>
  );
};
