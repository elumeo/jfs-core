import { SortDirection } from '@mui/material';
export type SortParams<RowType> = {
    sortBy?: keyof RowType;
    sortDirection?: SortDirection;
};
export type SetSort<RowType> = (newSort: SortParams<RowType>) => void;
declare const useSortParamsLocal: <RowType extends Record<string, unknown>>(init?: SortParams<RowType>) => [SortParams<RowType>, SetSort<RowType>];
export default useSortParamsLocal;
