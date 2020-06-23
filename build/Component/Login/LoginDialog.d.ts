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
declare const _default: import("react-redux").ComponentClass<ILoginDialogProps>;
export default _default;
