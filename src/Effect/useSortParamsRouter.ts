import { useCallback } from 'react';
import { SortDirection } from '@mui/material';
import useQueryParams from './useQueryParams';

type SortDirectionType = SortDirection & string
export type SortParams<RowType> = {
  sortBy?: keyof RowType extends string ? keyof RowType : never
  sortDirection?: SortDirectionType
}
export type SetSort<RowType> = (
  newSort: SortParams<RowType>
) => void
const useSortParamsRouter = <RowType extends Record<string, unknown>>(
  init?: SortParams<RowType>
): [SortParams<RowType>, SetSort<RowType>] => {
  const [params, setParam] = useQueryParams<SortParams<RowType>>(init)
  const update = useCallback<SetSort<RowType>>(
    (
      {
        sortBy,
        sortDirection
      }
    ) => {
      setParam(

        {
          sortBy,
          sortDirection,
        }

      )
    }
    ,
    [setParam]
  )
  return [params, update]
}
export default useSortParamsRouter
