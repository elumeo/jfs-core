import React from 'react';
import './LoginDialog.scss';
interface ILoginDialogProps {
    children?: any;
    isCheckingSession?: boolean;
    routeType?: string;
    loginVisible?: boolean;
    isAuthorized?: boolean;
    robotLoginAvailable?: boolean;
    appInitialized?: boolean;
}
declare const _default: import("react-redux").ConnectedComponent<React.FC<ILoginDialogProps>, Pick<ILoginDialogProps, never> & ILoginDialogProps>;
export default _default;
