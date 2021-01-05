/// <reference types="react" />
interface IAppHeaderProps {
    leftTools: () => JSX.Element;
    middleTools?: () => JSX.Element;
    rightTools: () => JSX.Element;
}
declare const _default: ({ leftTools, middleTools, rightTools }: IAppHeaderProps) => JSX.Element;
export default _default;
