import * as React from 'react';
import { InjectedIntlProps } from 'react-intl';
export interface IBoilerplateSearchProps extends InjectedIntlProps {
    id?: string;
    labelTranslationId?: string;
    placeholderTranslationId?: string;
    style?: React.CSSProperties;
    className?: string;
}
export interface IBoilerplateSearchState {
    searchProgress: boolean;
}
declare class Search extends React.Component<IBoilerplateSearchProps, IBoilerplateSearchState> {
    state: {
        searchProgress: boolean;
    };
    static defaultProps: {
        intl: any;
        id: string;
        placeholderTranslationId: string;
    };
    render(): JSX.Element;
}
declare const _default: typeof Search;
export default _default;
