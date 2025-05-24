import { unstable_batchedUpdates } from 'react-dom';

interface EventCallback<T extends Event = any> {
  (event: T): void;
}

export const addListener = (target: Window | Document | HTMLElement, event: string, cb: EventCallback): (() => any) => {
  const callback = (ev: any) => unstable_batchedUpdates(cb, ev);
  target.addEventListener(event, callback);
  return () => target.removeEventListener(event, callback);
};
