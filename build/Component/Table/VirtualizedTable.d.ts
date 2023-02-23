/// <reference types="react" />
import { TableVirtuosoProps } from 'react-virtuoso';
import { TableProps } from '@mui/material/Table';
import { SortDirection } from '@mui/material/TableCell';
import { SxProps } from '@mui/material';
export declare const visuallyHiddenStyle: SxProps;
export declare const ellipsesStyle: SxProps;
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
    tableSize?: TableProps['size'];
};
declare const VirtualizedTable: <ItemData extends {}>({ data, tableSize, sortBy, sortDirection, compare, filter, ...props }: VirtualizedTableProps<ItemData>) => JSX.Element;
export default VirtualizedTable;
