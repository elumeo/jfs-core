import * as React from 'react';
import { InjectedIntlProps } from 'react-intl';
interface IDialogExampleState {
    dialogVisible: boolean;
}
declare class DialogExample extends React.Component<InjectedIntlProps, IDialogExampleState> {
    state: {
        dialogVisible: boolean;
    };
    render(): JSX.Element;
}
declare const _default: typeof DialogExample;
export default _default;
