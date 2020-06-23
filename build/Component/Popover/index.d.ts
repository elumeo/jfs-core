import React from 'react';
import './Style.scss';
import { Position, Anker } from './Types';
declare namespace Popover {
    type Props = {
        position: Position;
        anker: Anker;
        Whisper: ({ isOpen, setIsOpen }: {
            isOpen: boolean;
            setIsOpen: (isOpen: boolean) => void;
        }) => JSX.Element;
        target: HTMLElement;
    };
}
declare const Popover: React.FC<Popover.Props>;
export default Popover;
