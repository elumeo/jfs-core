const positionFigureNames = ['top', 'left'];
const verticalFigures = ['top', 'bottom'];
const horizontalFigures = ['left', 'right'];
const dimensionName = (figure) => (isVerticalPosition(figure)
    ? 'height'
    : isHorizontalPosition(figure)
        ? 'width'
        : null);
const isVerticalPosition = (figure) => verticalFigures.includes(figure);
const isHorizontalPosition = (figure) => horizontalFigures.includes(figure);
const isPrimaryFigure = (figure) => verticalFigures[0] === figure || horizontalFigures[0] === figure;
const figurePositionMatch = (figure, position) => (figure === 'top' && isVerticalPosition(position) ||
    figure === 'left' && isHorizontalPosition(position));
const computeWhisperCenter = ({ whisper, speaker }) => positionFigureNames.reduce((center, figure) => (Object.assign(Object.assign({}, center), { [figure]: (whisper[figure]
        + whisper[dimensionName(figure)] / 2
        - speaker[dimensionName(figure)] / 2) })), { top: null, left: null });
const computePositionOffset = ({ position, speaker, whisper }) => positionFigureNames.reduce((positionOffset, figure) => (Object.assign(Object.assign({}, positionOffset), { [figure]: (figurePositionMatch(figure, position)
        ? (speaker[dimensionName(position)] / 2
            + whisper[dimensionName(position)] / 2) * (isPrimaryFigure(position)
            ? -1
            : 1)
        : 0) })), { top: null, left: null });
const computeAnkerOffset = ({ position, anker, speaker }) => positionFigureNames.reduce((ankerOffset, figure) => (Object.assign(Object.assign({}, ankerOffset), { [figure]: (!figurePositionMatch(figure, position)
        ? anker === 'start'
            ? speaker[dimensionName(figure)] / 2
            : anker === 'end'
                ? -speaker[dimensionName(figure)] / 2
                : 0
        : 0) })), { top: null, left: null });
const computeCorrectifierOffset = ({ position, anker, whisper }) => positionFigureNames.reduce((correctifierOffset, figure) => (Object.assign(Object.assign({}, correctifierOffset), { [figure]: (!figurePositionMatch(figure, position)
        ? anker === 'start'
            ? -whisper[dimensionName(figure)] / 2
            : anker === 'end'
                ? whisper[dimensionName(figure)] / 2
                : 0
        : 0) })), { top: null, left: null });
const computeSpacingOffset = ({ position, spacing }) => positionFigureNames.reduce((spacingOffset, figure) => (Object.assign(Object.assign({}, spacingOffset), { [figure]: (figurePositionMatch(figure, position)
        ? isPrimaryFigure(position)
            ? -spacing
            : spacing
        : 0) })), { top: null, left: null });
const computeOffset = ({ whisper, speaker, position, anker }) => {
    const whisperCenter = computeWhisperCenter({ whisper, speaker });
    const positionOffset = computePositionOffset({ position, whisper, speaker });
    const ankerOffset = computeAnkerOffset({ position, anker, speaker });
    const correctifierOffset = computeCorrectifierOffset({ position, anker, whisper });
    const spacingOffset = computeSpacingOffset({ position, spacing: 10 });
    return {
        top: (whisperCenter.top
            + positionOffset.top
            + ankerOffset.top
            + correctifierOffset.top
            + spacingOffset.top),
        left: (whisperCenter.left
            + positionOffset.left
            + ankerOffset.left
            + correctifierOffset.left
            + spacingOffset.left)
    };
};
export default computeOffset;
//# sourceMappingURL=computeOffset.js.map