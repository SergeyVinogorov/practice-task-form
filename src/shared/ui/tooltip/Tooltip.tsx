import { type Coords, TooltipPosition } from './types';
import {
  type ReactElement,
  type ReactNode,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import {
  computeCoords,
  computeTransform,
} from 'shared/lib/tooltip/computeTooltip.ts';
import { createPortal } from 'react-dom';
import { useTheme } from '../../lib/themeContext';

type Props = {
  content: ReactNode;
  position?: TooltipPosition;
  offsetPx?: number;
  children: ReactElement;
};

export function Tooltip({
  content,
  position = TooltipPosition.TOP,
  offsetPx = 8,
  children,
}: Props) {
  const { theme } = useTheme();
  const tooltipId = useId();
  const targetRef = useRef<HTMLElement | null>(null);

  const [open, setOpen] = useState(false);
  const [coords, setCoords] = useState<Coords>({ top: 0, left: 0 });

  const root = document.getElementById('tooltip-root');

  useLayoutEffect(() => {
    if (!open) return;
    const el = targetRef.current;
    if (!el) return;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const { top, left } = computeCoords(rect, position, offsetPx);
      setCoords({ top: top + window.scrollY, left: left + window.scrollX });
    };

    update();
  }, [open, position, offsetPx]);

  const handlerOnMouseEnter = () => {
    setOpen(true);
  };
  const handlerOnMouseLeave = () => {
    setOpen(false);
  };

  if (!root) return children;

  const tooltipClass =
    theme === 'dark'
      ? 'bg-slate-900 text-white border border-white/15'
      : 'bg-white text-slate-900 border border-black/10';

  return (
    <>
      <span
        ref={targetRef}
        onMouseEnter={handlerOnMouseEnter}
        onMouseLeave={handlerOnMouseLeave}
      >
        {children}
      </span>
      {open
        ? createPortal(
            <div
              id={tooltipId}
              role="tooltip"
              className={[
                'pointer-events-none absolute z-[9999] max-w-[280px] rounded-lg px-2.5 py-2 text-xs shadow-xl',
                tooltipClass,
              ].join(' ')}
              style={{
                top: coords.top,
                left: coords.left,
                transform: computeTransform(position),
              }}
            >
              {content}
            </div>,
            root
          )
        : null}
    </>
  );
}
