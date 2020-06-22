import React from 'react';
import { Position, Anker, Offset } from './Types';
declare namespace Speaker {
    type Props = {
        id: string;
        whisperId: string;
        isOpen: boolean;
        setIsOpen: (isOpen: boolean) => void;
        offset: Offset;
        position: Position;
        anker: Anker;
        target: HTMLElement;
    };
}
declare const Speaker: React.FC<Speaker.Props>;
export default Speaker;
