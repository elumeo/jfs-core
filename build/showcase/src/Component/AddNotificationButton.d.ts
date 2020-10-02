import { addNotificationAction, dismissNotificationAction } from '@elumeo/jfs-core/build/Store/Action/NotificationAction';
import { IToastConfig } from '@elumeo/jfs-core/build/Store/Reducer/Core/ToastReducer';
import { InjectedIntlProps } from 'react-intl';
export interface IAddNotificationButtonProps extends InjectedIntlProps {
    addNotificationAction?: typeof addNotificationAction;
    dismissNotificationAction?: typeof dismissNotificationAction;
    addToastAction?: (c: IToastConfig) => void;
    changeLanguageAction?: (lang: any) => void;
    language?: string;
}
declare const _default: import("react-redux").ConnectedComponent<any, any>;
export default _default;
