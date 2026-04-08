import { type Coords, TooltipPosition } from 'shared/ui/tooltip/types';

export const computeCoords = (
  rect: DOMRect,
  pos: TooltipPosition,
  offset: number
): Coords => {
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;

  switch (pos) {
    case TooltipPosition.TOP:
      return { top: rect.top - offset, left: cx };
    case TooltipPosition.BOTTOM:
      return { top: rect.bottom + offset, left: cx };
    case TooltipPosition.LEFT:
      return { top: cy, left: rect.left - offset };
    case TooltipPosition.RIGHT:
    default:
      return { top: cy, left: rect.right + offset };
  }
};

export const computeTransform = (pos: TooltipPosition) => {
  switch (pos) {
    case TooltipPosition.TOP:
      return 'translate(-50%, -100%)';
    case TooltipPosition.BOTTOM:
      return 'translate(-50%, 0)';
    case TooltipPosition.LEFT:
      return 'translate(-100%, -50%)';
    case TooltipPosition.RIGHT:
    default:
      return 'translate(0, -50%)';
  }
};
