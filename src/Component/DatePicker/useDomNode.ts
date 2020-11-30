import { useState, useEffect } from 'react';

const useDomNode = <T,>(grabDomNode: () => T) => {
  const [domNode, setDomNode] = useState<T>(null);

  useEffect(
    () => {
      const domNode = grabDomNode();
      if (domNode) {
        setDomNode(domNode);
      }
    }
  );

  return domNode;
}

export default useDomNode;
