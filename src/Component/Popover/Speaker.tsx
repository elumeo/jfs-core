import React from 'react';
import { createPortal } from 'react-dom';
import OutsideClickHandler from 'react-outside-click-handler';
import { Position, Anker, Offset } from './Types';

namespace Speaker {
  export type Props = {
    id: string;
    whisperId: string;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    offset: Offset;
    position: Position;
    anker: Anker;
    target: HTMLElement;
  }
}

const Speaker: React.FC<Speaker.Props> = ({
  id,
  whisperId,
  isOpen,
  setIsOpen,
  position,
  anker,
  offset: { top, left },
  children,
  target
}) => (
  createPortal(
    <OutsideClickHandler onOutsideClick={(event) => {
      const { path } = (event as unknown as { path: HTMLElement[] });
      const whisper = path.find(({ id }) => id === whisperId);
      if (!whisper) {
        setIsOpen(false);
      }
    }}>
      <div
        id={id}
        className={[
          `popover`,
          `position-${position}`,
          `anker-${anker}`,
          isOpen ? '' : 'hidden'
        ].join(' ')}
        style={{ top, left }}>
        <div className='popover-content'>
          {children}
        </div>
      </div>
    </OutsideClickHandler>,
    target
  )
);

export default Speaker;
