import * as React from 'react';
import Button from 'react-md/lib/Buttons/Button';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { webSocketConnectionReducerInitialState } from 'Core/Store/Reducer/Core/WebSocketConnectionReducer';
import { getRoomConnectionState, isWebSocketNamespaceConnectedState } from 'Core/Store/Selectors/WebSocketSelectors';
import { webSocketJoinRoomRequestAction, webSocketLeaveRoomRequestAction } from 'Core/Store/Action/WebSocketAction';

import Global from 'Store/Reducer';
import { IJsc2JfsPingExampleState } from 'Store/Reducer/App/Jsc2JfsPingExampleReducer';
import JSCApi from 'Jsc/Api';
import ROOM_PING = JSCApi.WebSocketClient.ROOM_PING;
import IAppConfig from 'Setup/IAppConfig';

export interface IJscWebSocketExampleButtonProps extends InjectedIntlProps {
  config?: IAppConfig;
  webSocketJoinRoomRequestAction?: typeof webSocketJoinRoomRequestAction;
  webSocketLeaveRoomRequestAction?: typeof webSocketLeaveRoomRequestAction;
  webSocketConnectionReducer?: typeof webSocketConnectionReducerInitialState,
  exampleWebSocket?: IJsc2JfsPingExampleState
}

class JscWebSocketPingButton extends React.Component<IJscWebSocketExampleButtonProps> {
  constructor(props) {
    super(props);
  }

  public joinWebSocketRoomPing = () => this.props.webSocketJoinRoomRequestAction(ROOM_PING);
  public leaveWebSocketRoomPing = () => this.props.webSocketLeaveRoomRequestAction(ROOM_PING);

  render() {
    const {intl: {formatMessage}, config, webSocketConnectionReducer} = this.props;
    if (!config) {
      return null;
    }
    if (isWebSocketNamespaceConnectedState(webSocketConnectionReducer, config.JscWebSocketClient.PrivateNamespace)) {
      const room = getRoomConnectionState(webSocketConnectionReducer, ROOM_PING);
      if (room === null || room.hasJoined === undefined || room.hasJoined === false) {
        return (
          <Button
            disabled={room !== null && room.isJoining}
            flat
            onClick={this.joinWebSocketRoomPing}>
            {formatMessage({id: 'jscWebSocket.pingJoinRoom'})}
          </Button>
        );
      } else {
        return (
          <Button
            flat
            onClick={this.leaveWebSocketRoomPing}>
            {formatMessage({id: 'jscWebSocket.pingLeaveRoom'})}
          </Button>
        );
      }
    }
    return 'JscWebSocket not connected!';
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

export default enhance(JscWebSocketPingButton);
