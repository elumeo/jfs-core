import { INotification } from '../../Types/Notification';
import './NotificationDrawer.scss';
import { hideNotificationDrawerAction, toggleNotificationDrawerAction } from '../../Store/Action/NotificationAction';
interface INotificationDrawerProps {
    notificationDrawerVisible?: boolean;
    notifications?: INotification[];
    notificationDrawerPinned?: boolean;
    toggleNotificationDrawerAction?: typeof toggleNotificationDrawerAction;
    hideNotificationDrawerAction?: typeof hideNotificationDrawerAction;
}
declare const _default: import("react-redux").ComponentClass<INotificationDrawerProps>;
export default _default;
