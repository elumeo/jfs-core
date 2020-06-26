import * as React from 'react';
import './OnScreenNotifications.scss';
import { INotification } from '../../Types/Notification';
export interface IOnScreenNotificationsProps {
    notifications?: INotification[];
    dismissAnimationClassName?: string;
}
declare class OnScreenNotifications extends React.Component<IOnScreenNotificationsProps> {
    render(): JSX.Element;
}
declare const _default: import("react-redux").ConnectedComponent<typeof OnScreenNotifications, Pick<React.ClassAttributes<OnScreenNotifications> & IOnScreenNotificationsProps, "key" | "ref"> & IOnScreenNotificationsProps>;
export default _default;
