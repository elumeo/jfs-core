/// <reference types="react" />
declare const Cell: {
    DateTime: import("react").MemoExoticComponent<({ value, noValueElement, asTwoLines, displayTime, ...rest }: import("./DateTime").Props) => import("react").JSX.Element>;
    DateTimeRange: import("react").FC<import("./DateTimeRange").Props>;
    Default: import("react").FC<import("./Default").Props>;
    Loading: import("react").FC<{}>;
    Msisdn: import("react").FC<import("./Msisdn").Props>;
    Product: import("react").NamedExoticComponent<import("./Product").TableCellProductProps>;
    Root: import("react").FC<import("./Root").Props>;
    Select: import("react").NamedExoticComponent<import("./Select").Props>;
};
export default Cell;
