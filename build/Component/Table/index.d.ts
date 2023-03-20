export { default as VirtualizedTable } from './VirtualizedTable';
declare const Table: {
    Cell: {
        DateTime: ({ value, noValueElement, asTwoLines, ...rest }: import("./Cell/DateTime").Props) => JSX.Element;
        DateTimeRange: import("react").FC<import("./Cell/DateTimeRange").Props>;
        Default: import("react").FC<import("./Cell/Default").Props>;
        Loading: import("react").FC<{}>;
        Msisdn: import("react").FC<import("./Cell/Msisdn").Props>;
        Product: import("react").FC<import("./Cell/Product").TableCellProductProps>;
        Root: import("react").FC<import("./Cell/Root").Props>;
        Select: import("react").FC<import("./Cell/Select").Props>;
    };
    Head: {
        Default: import("react").FC<import("./Head/Default").Props>;
        Select: import("react").FC<import("./Head/Select").Props>;
    };
    Row: {
        NoResults: import("react").FC<{}>;
        Footer: import("react").ForwardRefExoticComponent<{
            children?: import("react").ReactNode;
        } & import("react").RefAttributes<HTMLTableSectionElement>>;
    };
    Container: import("react").ForwardRefExoticComponent<import("react").RefAttributes<HTMLDivElement>>;
    Table: (props: import("@mui/material").TableProps<"table", {}>) => JSX.Element;
    VirtualizedTable: <ItemData extends {}>({ data, sortBy, sortDirection, compare, filter, tableProps, tableRowProps, components: propComponents, ...props }: import("./VirtualizedTable").Props<ItemData>) => JSX.Element;
};
export default Table;
