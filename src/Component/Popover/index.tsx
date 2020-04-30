import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Button from 'react-md/lib/Buttons/Button';
import Card from 'react-md/lib/Cards/Card';
import OutsideClickHandler from 'react-outside-click-handler';

import './Style.scss';

namespace Popover {
  export type Position = 'top' | 'left' | 'right' | 'bottom';
  export type Anker = 'start' | 'center' | 'end';

  export type Props = {
    position: Position;
    anker: Anker;
  }
}

const Popover: React.FC<Popover.Props> = ({
  position,
  anker
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [popoverId] = useState(Math.floor(Math.random() * 100));
  const [{ top, left }, setPosition] = useState({ top: 0, left: 0 });

  useEffect(
    () => {
      const popoverElement = document.getElementsByClassName(`popover-${popoverId}`)[0];
      if (popoverElement) {
        const buttonElement = document.getElementById(`popover-button-${popoverId}`);
        const buttonDimesions = buttonElement.getBoundingClientRect();
        const popoverDimensions = popoverElement.getBoundingClientRect();

        const buttonCenter = {
          left: (
            buttonDimesions.left
            + buttonDimesions.width / 2
            - popoverDimensions.width / 2
          ),
          top: (
            buttonDimesions.top
            + buttonDimesions.height / 2
            - popoverDimensions.height / 2
          )
        };

        const extraSpace = 10;

        const topPositionOffset = (
          position === 'top'
            ? -(popoverDimensions.height / 2 + buttonDimesions.height / 2)
            : position === 'bottom'
              ? popoverDimensions.height / 2 + buttonDimesions.height / 2
              : 0
        );

        const topAnkerOffset = (
          ['left', 'right'].includes(position)
            ? anker === 'start'
              ? popoverDimensions.height / 2
              : anker === 'end'
                ? - popoverDimensions.height / 2
                : 0
            : 0
        );

        const topCorrectifierOffset = (
          ['left', 'right'].includes(position)
            ? anker === 'start'
              ? - buttonDimesions.height / 2
              : anker === 'end'
                ? buttonDimesions.height / 2
                : 0
            : 0
        );

        const topSpacingOffset = (
          ['top', 'bottom'].includes(position)
            ? position === 'top'
              ? - extraSpace
              : extraSpace
            : 0
        );

        const topOffset = (
          topPositionOffset
          + topAnkerOffset
          + topCorrectifierOffset
          + topSpacingOffset
        );

        const leftPositionOffset = (
          position === 'left'
            ? -(popoverDimensions.width / 2 + buttonDimesions.width / 2)
            : position === 'right'
              ? popoverDimensions.width / 2 + buttonDimesions.width / 2
              : 0
        );

        const leftAnkerOffset = (
          ['top', 'bottom'].includes(position)
            ? anker === 'start'
              ? popoverDimensions.width / 2
              : anker === 'end'
                ? - popoverDimensions.width / 2
                : 0
            : 0
        );

        const leftCorrectifierOffset = (
          ['top', 'bottom'].includes(position)
            ? anker === 'start'
              ? - buttonDimesions.width / 2
              : anker === 'end'
                ? buttonDimesions.width / 2
                : 0
            : 0
        );

        const leftSpacingOffset = (
          ['left', 'right'].includes(position)
            ? position === 'left'
              ? - extraSpace
              : extraSpace
            : 0
        );

        const leftOffset = (
          leftPositionOffset
          + leftAnkerOffset
          + leftCorrectifierOffset
          + leftSpacingOffset
        );

        setPosition({
          left: buttonCenter.left + leftOffset,
          top: buttonCenter.top + topOffset
        });
      }
    },
    [isOpen]
  );

  return (
    <>
      <Button
        id={`popover-button-${popoverId}`}
        icon
        onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'close' : 'launch'}
      </Button>
      {
        createPortal(
          <OutsideClickHandler onOutsideClick={(event) => {
            // @ts-ignore
            const { path } = event;
            const button = (path as HTMLElement[]).find(
              ({ id }) => id === `popover-button-${popoverId}`
            );
            if (!button) {
              setIsOpen(false);
            }
          }}>
            <Card
              className={`popover position-${position} anker-${anker} popover-${popoverId}`}
              style={{
                position: 'absolute',
                top,
                left,
                width: 200,
                height: 200,
                zIndex: 100000,
                display: isOpen ? 'block' : 'none'
              }}>
              <div style={{ background: 'white', width: '100%', height: '100%' }}>
                TEST
              </div>
            </Card>
          </OutsideClickHandler>,
          document.getElementById('root')
        )
      }
    </>
  )
}

export default Popover;
