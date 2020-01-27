import * as React from 'react';
import { connect } from 'react-redux';

import { ICoreRootReducer } from '../../Store/Reducer';
import { webSocketConnectionReducerInitialState } from '../../Store/Reducer/WebSocketConnectionReducer';
import { webSocketUpdateRoomAction } from '../../Store/Action/WebSocketAction';
import IConfig from '../../Base/IConfig';
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
  state: ICoreRootReducer,
  ownProps: IWebsocketConnectionProps
): IWebsocketConnectionProps => ({
  ...ownProps,
  config: state.configReducer.config,
  webSocketConnectionReducer: state.webSocketConnectionReducer
});

export default connect(
  mapStateToProps,
  {
    webSocketUpdateRoomAction
  }
)(WebSocketConnection);
