/// <reference types="react" />
import { TableVirtuosoProps } from 'react-virtuoso';
import { SortDirection } from '@mui/material/TableCell';
import { SxProps } from '@mui/material';
export declare const visuallyHiddenStyle: SxProps;
export declare const flexContainerStyles: SxProps;
export declare const ellipsesStyle: SxProps;
export declare const noOutlineStyles: SxProps;
export declare const rowClickStyles: SxProps;
export declare const rowNoClickStyles: SxProps;
export type VirtualizedTableProps<ItemData> = Partial<TableVirtuosoProps<ItemData, unknown>> & {
    data: ItemData[];
    sortBy?: keyof ItemData;
    sortDirection?: SortDirection;
    compare?: (a: ItemData, b: ItemData) => -1 | 0 | 1;
    filter?: (item: ItemData) => boolean;
    setSort?: ({ sortBy, sortDirection }: {
        sortBy: keyof ItemData;
        sortDirection: SortDirection;
    }) => void;
};
declare const VirtualizedTable: <ItemData extends {}>({ data, sortBy, sortDirection, compare, filter, ...props }: VirtualizedTableProps<ItemData>) => JSX.Element;
export default VirtualizedTable;
