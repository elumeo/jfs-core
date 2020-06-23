declare type Position = {
    top: number;
    left: number;
};
declare type Size = {
    width: number;
    height: number;
};
declare const computeOffset: ({ whisper, speaker, position, anker }: {
    position: 'top' | 'left' | 'right' | 'bottom';
    anker: 'start' | 'center' | 'end';
    whisper: Size & Position;
    speaker: Size & Position;
}) => {
    top: number;
    left: number;
};
export default computeOffset;
