import type { FC } from 'react';
import { Tooltip, TooltipPosition, useConfirmDialog } from 'shared/index';
import { ActionButton } from 'shared/ui/ActionButton.tsx';

export const PortalShowcase: FC = () => {
  const { showConfirmDialog } = useConfirmDialog();
  const handlerDelete = async () => {
    const confirmed = await showConfirmDialog({
      title: 'Delete item?',
      description: 'This is an action that cannot be restored.',
    });

    console.log('confirmed:', confirmed);
  };
  return (
    <div className="h-full w-xl rounded-xl border bg-white p-6 shadow-sm">
      <h1 className="text-2xl font-bold text-slate-900">Portal showcase</h1>
      <div className="mt-6 flex items-center gap-3">
        <Tooltip content="I am a tooltip" position={TooltipPosition.RIGHT}>
          <ActionButton>Hover me</ActionButton>
        </Tooltip>
        <ActionButton
          tone="danger"
          onClick={handlerDelete}
          className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm font-semibold text-red-700 hover:bg-red-100"
        >
          Delete
        </ActionButton>
      </div>
    </div>
  );
};
