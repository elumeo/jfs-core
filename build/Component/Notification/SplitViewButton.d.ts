import { pinNotificationDrawerAction, unpinNotificationDrawerAction } from '../../Store/Action/NotificationAction';
export interface ISplitViewButtonProps {
    notificationDrawerPinned?: boolean;
    pinNotificationDrawerAction?: typeof pinNotificationDrawerAction;
    unpinNotificationDrawerAction?: typeof unpinNotificationDrawerAction;
}
declare const _default: import("react-redux").ComponentClass<ISplitViewButtonProps>;
export default _default;
