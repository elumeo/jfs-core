declare const Cell: {
    DateTime: ({ value, noValueElement, asTwoLines, ...rest }: import("./DateTime").Props) => JSX.Element;
    DateTimeRange: import("react").FC<import("./DateTimeRange").Props>;
    Default: import("react").FC<import("./Default").Props>;
    Loading: import("react").FC<{}>;
    Msisdn: import("react").FC<import("./Msisdn").Props>;
    Product: import("react").FC<import("./Product").TableCellProductProps>;
    Root: import("react").FC<import("./Root").Props>;
    Select: import("react").FC<import("./Select").Props>;
};
export default Cell;
