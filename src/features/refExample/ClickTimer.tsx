import { ActionButton } from 'shared/ui/ActionButton.tsx';
import { useRef } from 'react';
interface ClickTimerData {
  counter: number;
  firstClickTime: null | number;
}
export const ClickTimer = () => {
  const clickTimerRef = useRef<ClickTimerData>({
    counter: 0,
    firstClickTime: null,
  });
  const handlerClick = () => {
    const timerRef = clickTimerRef.current;
    if (timerRef) {
      if (timerRef.counter == 0) {
        timerRef.firstClickTime = Date.now();
      }
      timerRef.counter++;
      console.log({
        difference: timerRef.firstClickTime
          ? Date.now() - timerRef.firstClickTime
          : null,
        'click counter': timerRef.counter,
      });
    }
  };
  return (
    <ActionButton className="mt-2" onClick={handlerClick}>
      click timer
    </ActionButton>
  );
};
