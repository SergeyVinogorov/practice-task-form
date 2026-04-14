import { useOptimistic, useState, useTransition } from 'react';
import type { OptimisticTodo, Todo } from '../types';
import { wait } from '../lib/wait';
import { TodoInput } from './TodoInput';

const makeClientId = () => `c_${Math.random().toString(16).slice(2)}`;
const makeServerId = () => `s_${Math.random().toString(16).slice(2)}`;

export function TodoListOptimistic() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 's_1', text: 'Learn useOptimistic' },
  ]);

  const [optimisticTodos, addOptimistic] = useOptimistic<
    OptimisticTodo[],
    { clientId: string; text: string }
  >(todos, (current, action) => [
    ...current,
    { id: action.clientId, text: action.text, optimistic: true },
  ]);
  const [isPending, startTransition] = useTransition();

  async function addTodo(text: string) {
    const clientId = makeClientId();

    startTransition(() => {
      addOptimistic({ clientId, text });
    });

    startTransition(async () => {
      await wait(10000);
      const saved: Todo = { id: makeServerId(), text };

      setTodos((prev) => {
        const withoutTemp = prev.filter((t) => t.id !== clientId);
        return [...withoutTemp, saved];
      });
    });
  }

  return (
    <section className="mt-4 rounded-xl border border-slate-200 bg-white p-4">
      <h3 className="text-lg font-semibold">TodoListOptimistic</h3>

      <TodoInput onAdd={addTodo} />
      {isPending ? <p style={{ opacity: 0.7 }}>Updating…</p> : null}

      <ul className="mt-3 space-y-2">
        {optimisticTodos.map((t) => {
          const isSaving = t.optimistic === true || t.id.startsWith('c_');
          return (
            <li
              key={t.id}
              className={[
                'rounded-lg border px-3 py-2',
                t.optimistic ? 'bg-slate-50 text-slate-600' : 'bg-white',
              ].join(' ')}
            >
              {t.text}
              {isSaving ? (
                <span className="text-xs italic">(saving…)</span>
              ) : null}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
