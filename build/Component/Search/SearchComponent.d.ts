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
declare class SearchComponent extends React.Component<ISearchComponentProps, ISearchComponentState> {
    state: ISearchComponentState;
    static defaultProps: {
        autocompleteData: any[];
        focusInputOnAutocomplete: boolean;
        focusInputOnClear: boolean;
        forceNumericInput: boolean;
        searchOnAutocomplete: boolean;
        value: string;
        disabled: boolean;
    };
    constructor(props: any);
    handleChange: (value: string) => void;
    handleKeyDown: (e: any) => void;
    handleAutocomplete: (v: any) => void;
    handleSearch: (value?: string) => void;
    handleClear: () => void;
    render(): JSX.Element;
}
declare const _default: import("react-redux").ConnectedComponent<typeof SearchComponent, Pick<React.ClassAttributes<SearchComponent> & ISearchComponentProps, "key" | "ref"> & ISearchComponentProps>;
export default _default;
