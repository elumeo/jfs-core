import React from 'react';
import { connect } from 'react-redux';

import Global from '../../Store/Reducer/Global';
import { webSocketConnectionReducerInitialState } from '../../Store/Reducer/Core/WebSocketConnectionReducer';
import { webSocketUpdateRoomAction } from '../../Store/Action/WebSocketAction';
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

class WebSocketConnection extends React.Component<IWebsocketConnectionProps, IWebsocketConnectionState> {
  public componentDidMount() {
    WSClient.listenRoomsObservable$.subscribe((roomData) => this.props.webSocketUpdateRoomAction(roomData))
  }

  public render() {
    const {props: {children}} = this;
    return (
      <div>
        {children}
      </div>
    );
  }
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
