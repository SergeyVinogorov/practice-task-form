import type { FC } from 'react';
import { Tooltip, TooltipPosition } from 'shared/index';
import { ActionButton } from 'shared/ui/ActionButton.tsx';

export const PortalShowcase: FC = () => {
  return (
    <div className="h-full w-xl rounded-xl border bg-white p-6 shadow-sm">
      <h1 className="text-2xl font-bold text-slate-900">Portal showcase</h1>
      <div className="mt-6 flex items-center gap-3">
        <Tooltip content="I am a tooltip" position={TooltipPosition.RIGHT}>
          <ActionButton>Hover me</ActionButton>
        </Tooltip>
      </div>
    </div>
  );
};
