import { type FC, useState } from 'react';
import { TextInput } from 'shared/ui/form';
import { ActionButton } from 'shared';
interface Props {
  onAdd: (text: string) => void | Promise<void>;
}
export const TodoInput: FC<Props> = ({ onAdd }) => {
  const [text, setText] = useState('');

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const v = text.trim();
        if (!v) return;
        onAdd(v);
        setText('');
      }}
      className="mt-3 flex max-w-xl gap-2"
    >
      <TextInput
        value={text}
        name={'prevInput'}
        placeholder="New todo…"
        onChange={(e) => setText(e.target.value)}
      />
      <ActionButton type="submit" tone="info" active={true}>
        Add
      </ActionButton>
    </form>
  );
};
