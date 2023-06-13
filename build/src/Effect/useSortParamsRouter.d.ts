import { SortDirection } from '@mui/material';
type SortDirectionType = SortDirection & string;
export type SortParams<RowType> = {
    sortBy?: keyof RowType extends string ? keyof RowType : never;
    sortDirection?: SortDirectionType;
};
export type SetSort<RowType> = (newSort: SortParams<RowType>) => void;
declare const useSortParamsRouter: <RowType extends Record<string, unknown>>(init?: SortParams<RowType>) => [SortParams<RowType>, SetSort<RowType>];
export default useSortParamsRouter;
