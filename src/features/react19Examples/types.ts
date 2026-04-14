export type ActionValues = {
  firstName: string;
  lastName: string;
  email: string;
  value?: string;
};

export type ActionState = {
  values: ActionValues;
  dirty: boolean;
  status: 'idle' | 'error';
  message?: string;
};

export type AsyncSaveState =
  | { status: 'idle' }
  | { status: 'error'; message: string };

export type Todo = { id: string; text: string };
export type OptimisticTodo = Todo & { optimistic?: boolean };
