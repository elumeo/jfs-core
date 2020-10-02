import React from 'react';
import { parallelAsyncLoopExampleRequestAction } from '../../../Store/Action/parallelAsyncLoopExampleAction';
import { InjectedIntl } from 'react-intl';
export interface IBoilerplateProps {
    intl?: InjectedIntl;
    parallelAsyncLoopExampleRequestAction?: typeof parallelAsyncLoopExampleRequestAction;
}
declare class Boilerplate extends React.Component<IBoilerplateProps> {
    componentDidMount(): void;
    render(): JSX.Element;
}
declare const _default: import("react-redux").ConnectedComponent<typeof Boilerplate, Pick<React.ClassAttributes<Boilerplate> & IBoilerplateProps, "ref" | "key" | "intl">>;
export default _default;
