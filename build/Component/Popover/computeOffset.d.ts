declare type Position = {
    top: number;
    left: number;
};
declare type Size = {
    width: number;
    height: number;
};
declare const computeOffset: ({ whisper, speaker, position, anker }: {
    position: import("react-md/lib/Tooltips").Positions;
    anker: LineAlignSetting;
    whisper: Size & Position;
    speaker: Size & Position;
}) => {
    top: number;
    left: number;
};
export default computeOffset;
