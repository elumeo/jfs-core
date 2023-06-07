/// <reference types="react" />
export { default as VirtualizedTable } from './VirtualizedTable';
declare const Table: {
    Cell: {
        DateTime: import("react").MemoExoticComponent<({ value, noValueElement, asTwoLines, displayTime, ...rest }: any) => JSX.Element>;
        DateTimeRange: import("react").FC<any>;
        Default: import("react").FC<any>;
        Loading: import("react").FC<{}>;
        Msisdn: import("react").FC<any>;
        Product: import("react").NamedExoticComponent<any>;
        Root: import("react").FC<any>;
        Select: import("react").NamedExoticComponent<import("./Cell/Select").Props>;
    };
    Head: {
        Default: import("react").FC<import("./Head/Default").Props>;
        Select: import("react").NamedExoticComponent<import("./Head/Select").Props>;
    };
    Row: {
        NoResults: import("react").FC<{}>;
        Footer: import("react").ForwardRefExoticComponent<Pick<any, string | number | symbol> & import("react").RefAttributes<HTMLTableSectionElement>>;
    };
    Container: import("react").ForwardRefExoticComponent<import("react").RefAttributes<HTMLDivElement>>;
    Table: (props: TableProps) => JSX.Element;
    VirtualizedTable: <ItemData extends {}, ItemContext = unknown>({ data, sortBy, sortDirection, compare, filter, tableProps, tableRowProps, components: propComponents, ...props }: any) => JSX.Element;
};
export default Table;
