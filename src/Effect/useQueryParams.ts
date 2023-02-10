import { pick } from 'lodash';
import { useCallback, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const toJSON = <T>(param: URLSearchParams): T =>
  Object.fromEntries(param.entries()) as T

export const useQueryParams = <QueryParams extends Record<string, string | null | undefined>>
  (defaultParams?: QueryParams):
  [QueryParams, ReturnType<typeof useState<QueryParams | ((old: QueryParams) => QueryParams) >>[1], URLSearchParams] => {
  const [searchParams, setSearchParams] = useSearchParams(new URLSearchParams(defaultParams as Record<string, string>));

  const update = useCallback(
    (newParams: QueryParams) => {
      const obj = toJSON<QueryParams>(searchParams)
      const joined = { ...obj, ...newParams }
      const newParam =
        new URLSearchParams(
          pick<QueryParams>(
            joined,
            Object.keys(joined)
              //@INFO : omit nullish keys
              .filter(key => joined[key] !== null && joined[key] !== undefined)
          )
        )
      setSearchParams(newParam)
    }, [setSearchParams, searchParams]);


  return [toJSON<QueryParams>(searchParams), update, searchParams]
}

export default useQueryParams
