import React from 'react';
import { addToastAction } from '../../Store/Action/ToastAction';
import './SearchComponent.scss';
export interface ISearchComponentProps {
    addToastAction?: typeof addToastAction;
    autocompleteData?: string[] | number[] | {
        dataLabel: string;
        dataValue: string;
    }[];
    centered?: boolean;
    focusInputOnAutocomplete?: boolean;
    focusInputOnClear?: boolean;
    forceNumericInput?: boolean;
    id: string;
    indicateSearchProgress?: boolean;
    labelTranslationId?: string;
    onChange?: (value: string) => void;
    onClear?: () => void;
    onSearch: (props: ISearchComponentProps, state: ISearchComponentState) => void;
    placeholderTranslationId: string;
    searchOnAutocomplete?: boolean;
    style?: React.CSSProperties;
    className?: string;
    value?: string;
    disabled?: boolean;
}
export interface ISearchComponentState {
    value?: string;
    inputFocused?: boolean;
}
declare const _default: import("react-redux").ComponentClass<ISearchComponentProps>;
export default _default;
