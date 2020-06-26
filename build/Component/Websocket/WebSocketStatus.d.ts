import React from 'react';
import { IWebsocketConnectionProps, IWebsocketConnectionState } from './WebSocketConnection';
import './WebSocketStatus.scss';
declare class WebSocketStatus extends React.Component<IWebsocketConnectionProps, IWebsocketConnectionState> {
    render(): JSX.Element;
}
declare const _default: import("react-redux").ConnectedComponent<typeof WebSocketStatus, Pick<React.ClassAttributes<WebSocketStatus> & IWebsocketConnectionProps, "key" | "ref"> & IWebsocketConnectionProps>;
export default _default;
