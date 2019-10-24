import * as React from 'react';
import { connect } from 'react-redux';

import IRootReducer from '../../store/reducer/RootReducer';
import { IConfigReducerState } from '../../store/reducer/ConfigReducer';
import { IWebSocketReducerState } from '../../store/reducer/WebSocketReducer';
import { webSocketConnectRequestAction } from '../../store/action/WebSocketAction';
import { ActionBuilder } from 'typesafe-actions/dist/create-standard-action';

export interface IWebsocketConnectionProps {
  config?: IConfigReducerState;
  webSocket?: IWebSocketReducerState;
  webSocketConnectRequestAction?: ActionBuilder<string>;
}

export interface IWebsocketConnectionState {
  isConnecting: false,
  isConnected: false
}

class WebSocketConnection extends React.Component<IWebsocketConnectionProps, IWebsocketConnectionState> {
  public render() {
    const {props: {children}} = this;

    return (
      <div>
        {children}
      </div>
    );
  }
}

const mapStateToProps = (state: IRootReducer, ownProps: IWebsocketConnectionProps): IWebsocketConnectionProps => ({
  ...ownProps,
  config: state.configReducer,
  webSocket: state.webSocketReducer
});

export default connect(
  mapStateToProps,
  { webSocketConnectRequestAction }
)(WebSocketConnection);
