/// <reference types="react" />
import { TableVirtuosoProps } from 'react-virtuoso';
import { SortDirection } from '@mui/material/TableCell';
import { SxProps, TableProps } from '@mui/material';
import { TableRowProps } from '@mui/material/TableRow';
export declare const visuallyHiddenStyle: SxProps;
export declare const ellipsesStyle: SxProps;
export type Props<ItemData, ItemContext = unknown> = Partial<TableVirtuosoProps<ItemData, ItemContext>> & {
    data: ItemData[];
    sortBy?: keyof ItemData;
    sortDirection?: SortDirection;
    compare?: (a: ItemData, b: ItemData) => -1 | 0 | 1;
    filter?: (item: ItemData) => boolean;
    setSort?: ({ sortBy, sortDirection }: {
        sortBy: keyof ItemData;
        sortDirection: SortDirection;
    }) => void;
    tableProps?: TableProps;
    tableRowProps?: TableRowProps;
};
declare const _default: <ItemData extends {}, ItemContext = unknown>({ data, sortBy, sortDirection, compare, filter, tableProps, tableRowProps, components: propComponents, ...props }: Props<ItemData, ItemContext>) => JSX.Element;
export default _default;
