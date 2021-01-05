import React from 'react';
import './AppToolbar.scss';
export interface IAppToolbarProps {
    LeftTools: () => JSX.Element;
    MiddleTools?: () => JSX.Element;
    RightTools: () => JSX.Element;
}
declare const AppToolbar: React.FC<IAppToolbarProps>;
export default AppToolbar;
