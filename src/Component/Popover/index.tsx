import React, { useState, useEffect } from 'react';
import computeOffset from './computeOffset';
import Speaker from './Speaker';
import './Style.scss';
import { Position, Anker } from './Types';

namespace Popover {
  export type Props = {
    position: Position;
    anker: Anker;
    Whisper: ({
      isOpen,
      setIsOpen
    }: {
      isOpen: boolean;
      setIsOpen: (isOpen: boolean) => void;
    }) => JSX.Element;
    target: HTMLElement;
  }
}

const Popover: React.FC<Popover.Props> = ({
  position, anker, Whisper, children, target
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [offset, setOffset] = useState({ top: 0, left: 0 });
  const [popoverId] = useState(Math.floor(Math.random() * 100));
  const [speakerId] = useState(`popover-speaker-${popoverId}`);
  const [whisperId] = useState(`popover-whisper-${popoverId}`);
  const [maxWhisperWidth, setMaxWhisperWidth] = useState(null);

  useEffect(
    () => {
      const speakerElement = document.getElementById(speakerId);
      if (speakerElement) {
        const whisperElement = document.getElementById(whisperId);
        const whisper = whisperElement.getBoundingClientRect();
        const speaker = speakerElement.getBoundingClientRect();
        setOffset(
          computeOffset({ whisper, speaker, position, anker })
        );
      }
    },
    [isOpen]
  );

  useEffect(
    () => {
      const realWhisper = document.getElementById(whisperId).children[0];
      setMaxWhisperWidth(realWhisper.clientWidth);
    },
    [
      document.getElementById(whisperId) &&
      document.getElementById(whisperId).children[0]
    ]
  );

  return (
    <>
      <div id={whisperId} style={{ maxWidth: maxWhisperWidth }}>
        <Whisper
          isOpen={isOpen}
          setIsOpen={setIsOpen}/>
      </div>
      <Speaker
        id={speakerId}
        whisperId={whisperId}
        offset={offset}
        position={position}
        anker={anker}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        target={target}>
        {children}
      </Speaker>
    </>
  )
}

export default Popover;
