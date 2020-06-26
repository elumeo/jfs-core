import * as React from 'react';
import { pinNotificationDrawerAction, unpinNotificationDrawerAction } from '../../Store/Action/NotificationAction';
export interface ISplitViewButtonProps {
    notificationDrawerPinned?: boolean;
    pinNotificationDrawerAction?: typeof pinNotificationDrawerAction;
    unpinNotificationDrawerAction?: typeof unpinNotificationDrawerAction;
}
declare class SplitViewButton extends React.Component<ISplitViewButtonProps> {
    render(): JSX.Element;
}
declare const _default: import("react-redux").ConnectedComponent<typeof SplitViewButton, Pick<React.ClassAttributes<SplitViewButton> & ISplitViewButtonProps, "key" | "ref"> & ISplitViewButtonProps>;
export default _default;
