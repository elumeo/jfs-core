/// <reference types="react" />
export { default as VirtualizedTable } from './VirtualizedTable';
declare const Table: {
    TableHead: {
        Default: import("react").FC<import("./TableHead/Default").Props>;
        Select: import("react").FC<import("./TableHead/Select").Props>;
    };
    TableRow: {
        Loading: import("react").FC<import("@mui/material").TableRowProps<"tr", {}>>;
        NoResults: import("react").FC<import("@mui/material").BoxProps<"div", {}>>;
    };
    TableCell: {
        DateTime: ({ value, noValueElement, asTwoLines, ...rest }: import("./TableCell/DateTime").Props) => JSX.Element;
        DateTimeRange: import("react").FC<import("./TableCell/DateTimeRange").Props>;
        Default: import("react").FC<import("./TableCell/Default").Props>;
        Loading: import("react").FC<{}>;
        Msisdn: import("react").FC<import("./TableCell/Msisdn").Props>;
        Product: import("react").FC<import("./TableCell/Product").TableCellProductProps>;
        Root: import("react").FC<import("./TableCell/Root").Props>;
        Select: import("react").FC<import("./TableCell/Select").Props>;
    };
    VirtualizedTable: <ItemData extends {}>({ data, tableSize, sortBy, sortDirection, compare, filter, tableRowProps, ...props }: import("./VirtualizedTable").VirtualizedTableProps<ItemData>) => JSX.Element;
};
export default Table;
