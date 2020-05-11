type Position = {
  top: number;
  left: number;
}

type PositionFigureName = 'top' | 'left';
const positionFigureNames: PositionFigureName[] = ['top', 'left'];

type Size = {
  width: number;
  height: number;
}

// -----------------------------------------------------------------------------

const verticalFigures: string[] = ['top', 'bottom'];
const horizontalFigures: string[] = ['left', 'right'];

const dimensionName = (
  figure: 'top' | 'left' | 'right' | 'bottom'
): 'width' | 'height' => (
  isVerticalPosition(figure)
    ? 'height'
    : isHorizontalPosition(figure)
      ? 'width'
      : null
);

const isVerticalPosition = (
  figure: 'top' | 'left' | 'right' | 'bottom'
) => verticalFigures.includes(figure);


const isHorizontalPosition = (
  figure: 'top' | 'left' | 'right' | 'bottom'
) => horizontalFigures.includes(figure);

const isPrimaryFigure = (
  figure: 'top' | 'left' | 'right' | 'bottom'
) => verticalFigures[0] === figure || horizontalFigures[0] === figure;

const figurePositionMatch = (
  figure: 'top' | 'left',
  position: 'top' | 'left' | 'right' | 'bottom'
) => (
  figure === 'top' && isVerticalPosition(position) ||
  figure === 'left' && isHorizontalPosition(position)
);

// -----------------------------------------------------------------------------

const computeWhisperCenter = ({ whisper, speaker }: {
  whisper: Size & Position;
  speaker: Size & Position;
}): Position => positionFigureNames.reduce(
  (center, figure) => ({
    ...center,
    [figure]: (
      whisper[figure]
      + whisper[dimensionName(figure)] / 2
      - speaker[dimensionName(figure)] / 2
    )
  }),
  { top: null, left: null }
);

// -----------------------------------------------------------------------------

const computePositionOffset = ({ position, speaker, whisper }: {
  position: 'top' | 'left' | 'right' | 'bottom';
  whisper: Size;
  speaker: Size;
}): Position => positionFigureNames.reduce(
  (positionOffset, figure) => ({
    ...positionOffset,
    [figure]: (
      figurePositionMatch(figure, position)
        ? (
          speaker[dimensionName(position)] / 2
          + whisper[dimensionName(position)] / 2
        ) * (
          isPrimaryFigure(position)
            ? -1
            : 1
        )
        : 0
    )
  }),
  { top: null, left: null }
);

const computeAnkerOffset = ({ position, anker, speaker }: {
  position: 'top' | 'left' | 'right' | 'bottom';
  anker: 'start' | 'center' | 'end';
  speaker: Size;
}): Position => positionFigureNames.reduce(
  (ankerOffset, figure) => ({
    ...ankerOffset,
    [figure]: (
      !figurePositionMatch(figure, position)
        ? anker === 'start'
          ? speaker[dimensionName(figure)] / 2
          : anker === 'end'
            ? - speaker[dimensionName(figure)] / 2
            : 0
        : 0
    )
  }),
  { top: null, left: null }
);

const computeCorrectifierOffset = ({ position, anker, whisper }: {
  position: 'top' | 'left' | 'right' | 'bottom';
  anker: 'start' | 'center' | 'end';
  whisper: Size;
}): Position => positionFigureNames.reduce(
  (correctifierOffset, figure) => ({
    ...correctifierOffset,
    [figure]: (
      !figurePositionMatch(figure, position)
        ? anker === 'start'
          ? - whisper[dimensionName(figure)] / 2
          : anker === 'end'
            ? whisper[dimensionName(figure)] / 2
            : 0
        : 0
    )
  }),
  { top: null, left: null }
);

const computeSpacingOffset = ({ position, spacing }: {
  position: 'top' | 'left' | 'right' | 'bottom';
  spacing: number;
}): Position => positionFigureNames.reduce(
  (spacingOffset, figure) => ({
    ...spacingOffset,
    [figure]: (
      figurePositionMatch(figure, position)
        ? isPrimaryFigure(position)
          ? - spacing
          : spacing
        : 0
    )
  }),
  { top: null, left: null }
);

// -----------------------------------------------------------------------------

const computeOffset = ({ whisper, speaker, position, anker }: {
  position: 'top' | 'left' | 'right' | 'bottom';
  anker: 'start' | 'center' | 'end';
  whisper: Size & Position;
  speaker: Size & Position;
}) => {
  const whisperCenter = computeWhisperCenter({ whisper, speaker });
  const positionOffset = computePositionOffset({ position, whisper, speaker });
  const ankerOffset = computeAnkerOffset({ position, anker, speaker });
  const correctifierOffset = computeCorrectifierOffset({ position, anker, whisper });
  const spacingOffset = computeSpacingOffset({ position, spacing: 10 });

  return {
    top: (
      whisperCenter.top
      + positionOffset.top
      + ankerOffset.top
      + correctifierOffset.top
      + spacingOffset.top
    )
    ,
    left: (
      whisperCenter.left
      + positionOffset.left
      + ankerOffset.left
      + correctifierOffset.left
      + spacingOffset.left
    )
  };
}


export default computeOffset;
