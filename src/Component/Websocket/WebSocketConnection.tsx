import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Global from 'Store/Reducer/Global';
import { webSocketConnectionReducerInitialState } from 'Store/Reducer/Core/WebSocketConnectionReducer';
import { webSocketUpdateRoomAction } from 'Action/WebSocketAction';
import IConfig from 'Types/Configuration';
import { WSClient } from '../../Base/WSClient';

export interface IWebsocketConnectionProps {
  config?: IConfig;
  webSocketConnectionReducer?: typeof webSocketConnectionReducerInitialState;
  webSocketUpdateRoomAction?: typeof webSocketUpdateRoomAction;
}

export interface IWebsocketConnectionState {
  isConnecting: false,
  isConnected: false
}

const WebSocketConnection: React.FC<IWebsocketConnectionProps> = ({
  children,
  webSocketUpdateRoomAction
}) => {
  useEffect(
    () => {
      WSClient.listenRoomsObservable$.subscribe((roomData) => webSocketUpdateRoomAction(roomData));
    },
    []
  );

  return (
    <div>
      {children}
    </div>
  )
}

const mapStateToProps = (
  state: Global.State,
  ownProps: IWebsocketConnectionProps
): IWebsocketConnectionProps => ({
  ...ownProps,
  config: state.Core.Configuration.config,
  webSocketConnectionReducer: state.Core.WebSocketConnection
});

export default connect(
  mapStateToProps,
  {
    webSocketUpdateRoomAction
  }
)(WebSocketConnection);
