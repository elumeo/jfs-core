/// <reference types="react" />
interface IAppHeaderProps {
    leftTools: () => JSX.Element;
    middleTools?: () => JSX.Element;
    rightTools: () => JSX.Element;
    variant?: 'regular' | 'dense';
}
declare const _default: ({ leftTools, middleTools, rightTools, variant }: IAppHeaderProps) => JSX.Element;
export default _default;
