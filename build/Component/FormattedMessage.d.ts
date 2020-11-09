import React from 'react';
import Translations from 'Utilities/Format/Translations';
declare const _default: import("react-redux").ConnectedComponent<(<T>({ id, values, mapValues }: React.PropsWithChildren<{
    messages?: Translations.Set;
    language?: string;
    id: string;
    values?: T;
    mapValues?: (values: T) => T;
}>) => JSX.Element), Pick<{
    messages?: Translations.Set;
    language?: string;
    id: string;
    values?: unknown;
    mapValues?: (values: unknown) => unknown;
}, never> & {
    messages?: Translations.Set;
    language?: string;
    id: string;
    values?: unknown;
    mapValues?: (values: unknown) => unknown;
} & {
    children?: React.ReactNode;
}>;
export default _default;
