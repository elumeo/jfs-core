import './OnScreenNotifications.scss';
import { INotification } from '../../Types/Notification';
export interface IOnScreenNotificationsProps {
    notifications?: INotification[];
    dismissAnimationClassName?: string;
}
declare const _default: import("react-redux").ComponentClass<IOnScreenNotificationsProps>;
export default _default;
