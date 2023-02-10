import { useState } from 'react';
export declare const useQueryParams: <QueryParams extends Record<string, string>>(defaultParams?: QueryParams) => [QueryParams, import("react").Dispatch<import("react").SetStateAction<QueryParams | ((old: QueryParams) => QueryParams)>>, URLSearchParams];
export default useQueryParams;
