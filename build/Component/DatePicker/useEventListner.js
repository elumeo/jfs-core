import { useState, useEffect } from 'react';
const useEventListener = (domNode, eventName, nextEventListener) => {
    const [eventListener, setEventListener] = useState(null);
    useEffect(() => {
        if (domNode && eventListener) {
            domNode.removeEventListener('click', eventListener);
        }
        if (domNode) {
            domNode.addEventListener(eventName, nextEventListener);
            setEventListener(nextEventListener);
        }
    }, [domNode, nextEventListener]);
};
export default useEventListener;
//# sourceMappingURL=useEventListner.js.map