import React from 'react';
import { SortDirection } from '@mui/material';
import { useSearchParams, URLSearchParamsInit } from 'react-router-dom';

export type SortParams<RowType> = {
  sortBy?: keyof RowType
  sortDirection?: SortDirection
}
export type SetSort<RowType> = (
  newSort: SortParams<RowType>
) => void
const useSortParamsLocal = <RowType extends Record<string, unknown>>(
  init?: SortParams<RowType>
): [SortParams<RowType>, SetSort<RowType>] => {
  const [sortBy, setSortBy] = React.useState<keyof RowType>(init.sortBy || 'id')
  const [sortDirection, setSortDirection] = React.useState<SortDirection>(init.sortDirection || 'asc')

  const update = React.useCallback(
    (
      {
        sortBy: newSortBy,
        sortDirection: newSortDirection
      }: SortParams<RowType>
    ) => {
      setSortBy(old => newSortBy || old)
      setSortDirection(old => newSortDirection || old)
    },
    [setSortBy, setSortDirection]
  )
  return [{ sortBy, sortDirection }, update]
}
export default useSortParamsLocal
