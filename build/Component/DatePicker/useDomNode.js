import { useState, useEffect } from 'react';
const useDomNode = (grabDomNode) => {
    const [domNode, setDomNode] = useState(null);
    useEffect(() => {
        const domNode = grabDomNode();
        if (domNode) {
            setDomNode(domNode);
        }
    });
    return domNode;
};
export default useDomNode;
//# sourceMappingURL=useDomNode.js.map