/// <reference types="react" />
declare const Cell: {
    DateTime: import("react").MemoExoticComponent<({ value, noValueElement, asTwoLines, displayTime, ...rest }: any) => JSX.Element>;
    DateTimeRange: import("react").FC<any>;
    Default: import("react").FC<any>;
    Loading: import("react").FC<{}>;
    Msisdn: import("react").FC<any>;
    Product: import("react").NamedExoticComponent<any>;
    Root: import("react").FC<any>;
    Select: import("react").NamedExoticComponent<import("./Select").Props>;
};
export default Cell;
