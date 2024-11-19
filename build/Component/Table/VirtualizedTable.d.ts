/// <reference types="react" />
import { TableVirtuosoProps } from 'react-virtuoso';
import { SortDirection } from '@mui/material/TableCell';
import { SxProps, TableBodyProps, TableProps } from '@mui/material';
import { TableRowProps } from '@mui/material/TableRow';
export declare const visuallyHiddenStyle: SxProps;
export declare const ellipsesStyle: SxProps;
export type Props<ItemData, ItemContext = unknown> = TableVirtuosoProps<ItemData, ItemContext> & {
    data: ItemData[];
    sortBy?: keyof ItemData;
    sortDirection?: SortDirection;
    compare?: (a: ItemData, b: ItemData) => -1 | 0 | 1;
    filter?: (item: ItemData) => boolean;
    setSort?: ({ sortBy, sortDirection }: {
        sortBy: keyof ItemData;
        sortDirection: SortDirection;
    }) => void;
    isLoading?: boolean;
    slotProps?: {
        tableProps?: TableProps;
        tableRowProps?: TableRowProps;
        tableBodyProps?: TableBodyProps;
    };
};
declare const VirtualizedTable: <ItemData extends {}, ItemContext = unknown>({ data, sortBy, sortDirection, compare, filter, slotProps, components, isLoading, ...props }: Props<ItemData, ItemContext>) => JSX.Element;
export default VirtualizedTable;
