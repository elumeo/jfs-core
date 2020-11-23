import React from 'react';
import './SearchComponent.scss';
import { InjectedIntlProps } from 'react-intl';
export declare type SearchComponentProps = {
    autocompleteData?: string[] | number[] | {
        dataLabel: string;
        dataValue: string;
    }[];
    blurOnEsc?: boolean;
    centered?: boolean;
    className?: string;
    disabled?: boolean;
    focusInputOnAutocomplete?: boolean;
    focusInputOnClear?: boolean;
    forceNumericInput?: boolean;
    id: string;
    indicateSearchProgress?: boolean;
    labelTranslationId?: string;
    onChange?: (value: string) => void;
    onClear?: () => void;
    onRefAvailable?: (ref: any) => void;
    onSearch: (props: SearchComponentProps, state: SearchComponentState) => void;
    placeholderTranslationId: string;
    searchOnAutocomplete?: boolean;
    style?: React.CSSProperties;
    value?: string;
};
export declare type SearchComponentState = {
    value?: string;
    inputFocused?: boolean;
};
declare const SearchComponent: React.FC<SearchComponentProps & InjectedIntlProps>;
export default SearchComponent;
