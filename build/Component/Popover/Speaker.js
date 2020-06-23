import React from 'react';
import { createPortal } from 'react-dom';
import OutsideClickHandler from 'react-outside-click-handler';
const Speaker = ({ id, whisperId, isOpen, setIsOpen, position, anker, offset: { top, left }, children, target }) => (createPortal(React.createElement(OutsideClickHandler, { onOutsideClick: (event) => {
        const { path } = event;
        const whisper = path.find(({ id }) => id === whisperId);
        if (!whisper) {
            setIsOpen(false);
        }
    } },
    React.createElement("div", { id: id, className: [
            `popover`,
            `position-${position}`,
            `anker-${anker}`,
            isOpen ? '' : 'hidden'
        ].join(' '), style: { top, left } },
        React.createElement("div", { className: 'popover-content' }, children))), target));
export default Speaker;
//# sourceMappingURL=Speaker.js.map