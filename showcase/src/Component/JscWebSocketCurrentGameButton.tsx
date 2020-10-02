import * as React from 'react';
import Button from 'react-md/lib/Buttons/Button';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { webSocketConnectionReducerInitialState } from 'Core/Store/Reducer/Core/WebSocketConnectionReducer';
import { getRoomConnectionState } from 'Core/Store/Selectors/WebSocketSelectors';
import { webSocketJoinRoomRequestAction, webSocketLeaveRoomRequestAction } from 'Core/Store/Action/WebSocketAction';
import { isWebSocketNamespaceConnectedState } from 'Core/Store/Selectors/WebSocketSelectors';

import Global from 'Store/Reducer';
import JSCApi from 'Jsc/Api';
import { ICurrentGameState } from 'Store/Reducer/App/currentGameReducer';
import ROOM_CURRENT_GAME = JSCApi.WebSocketClient.ROOM_CURRENT_GAME;
import IAppConfig from 'Setup/IAppConfig';

export interface IJscWebSocketCurrentGameButtonProps extends InjectedIntlProps {
  config?: IAppConfig;
  webSocketJoinRoomRequestAction?: typeof webSocketJoinRoomRequestAction;
  webSocketLeaveRoomRequestAction?: typeof webSocketLeaveRoomRequestAction;
  webSocketConnectionReducer?: typeof webSocketConnectionReducerInitialState,
  currentGame?: ICurrentGameState
}

class JscWebSocketCurrentGameButton extends React.Component<IJscWebSocketCurrentGameButtonProps> {
  public joinWebSocketRoom = () => this.props.webSocketJoinRoomRequestAction(ROOM_CURRENT_GAME);
  public leaveWebSocketRoom = () => this.props.webSocketLeaveRoomRequestAction(ROOM_CURRENT_GAME);

  render() {
    const {intl: {formatMessage}, config, webSocketConnectionReducer } = this.props;
    if (isWebSocketNamespaceConnectedState(webSocketConnectionReducer, config.JscWebSocketClient.PrivateNamespace)) {
      const room = getRoomConnectionState(webSocketConnectionReducer, ROOM_CURRENT_GAME);
      if (room === null || room.hasJoined === undefined || room.hasJoined === false) {
        return (
          <Button
            disabled={room !== null && room.isJoining}
            flat
            onClick={this.joinWebSocketRoom}>
            {formatMessage({id: 'jscWebSocket.currentGameJoinRoom'})}
          </Button>
        );
      } else {
        return (
          <Button
            flat
            onClick={this.leaveWebSocketRoom}>
            {formatMessage({id: 'jscWebSocket.currentGameLeaveRoom'})}
          </Button>
        );
      }
    }
    return 'WebSocket not connected!';
  }
}

const mapStateToProps = (state: Global.State, props) => ({
  ...props,
  webSocketConnectionReducer: state.Core.WebSocketConnection,
  jsc2JfsPingExampleReducer: state.App.jsc2JfsPingExampleReducer,
  config: state.App.configurationReducer.config,
  ...state.Core.Language
});

const enhance = compose(
  connect(mapStateToProps, { webSocketJoinRoomRequestAction, webSocketLeaveRoomRequestAction }),
  injectIntl
);

export default enhance(JscWebSocketCurrentGameButton);
