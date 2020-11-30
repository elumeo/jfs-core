import { useState, useEffect } from 'react';

const useEventListener = (
  domNode: HTMLElement,
  eventName: string,
  nextEventListener: EventListener
) => {
  const [eventListener, setEventListener] = useState<EventListener>(null);
  useEffect(
    () => {
      if (domNode && eventListener) {
        domNode.removeEventListener('click', eventListener);
      }

      if (domNode) {
        domNode.addEventListener(
          eventName,
          nextEventListener
        );
        setEventListener(nextEventListener);
      }
    },
    [domNode, nextEventListener]
  );
}

export default useEventListener;
