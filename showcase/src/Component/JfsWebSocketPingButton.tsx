import * as React from 'react';
import Button from 'react-md/lib/Buttons/Button';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { webSocketConnectionReducerInitialState, IWebSocketRoom } from 'Core/Store/Reducer/Core/WebSocketConnectionReducer';
import { getRoomConnectionState, isWebSocketNamespaceConnectedState } from 'Core/Store/Selectors/WebSocketSelectors';
import { webSocketJoinRoomRequestAction, webSocketLeaveRoomRequestAction } from 'Core/Store/Action/WebSocketAction';

import Global from 'Store/Reducer';
import { IJsc2JfsPingExampleState } from 'Store/Reducer/App/Jsc2JfsPingExampleReducer';
import IAppConfig from 'Setup/IAppConfig';

export interface IJfsWebSocketExampleButtonProps extends InjectedIntlProps {
  config?: IAppConfig;
  webSocketJoinRoomRequestAction?: typeof webSocketJoinRoomRequestAction;
  webSocketLeaveRoomRequestAction?: typeof webSocketLeaveRoomRequestAction;
  webSocketConnectionReducer?: typeof webSocketConnectionReducerInitialState,
  exampleWebSocket?: IJsc2JfsPingExampleState
}

class JfsWebSocketPingButton extends React.Component<IJfsWebSocketExampleButtonProps> {
  constructor(props) {
    super(props);
  }

  public pingRoom: IWebSocketRoom = {room: 'ping', namespace: 'Jfs2Jfs'};
  public joinWebSocketRoomPing = () => this.props.webSocketJoinRoomRequestAction(this.pingRoom);
  public leaveWebSocketRoomPing = () => this.props.webSocketLeaveRoomRequestAction(this.pingRoom);

  render() {
    const {intl: {formatMessage}, config, webSocketConnectionReducer} = this.props;
    if (isWebSocketNamespaceConnectedState(webSocketConnectionReducer, config.JfsWebSocketClient.PrivateNamespace)) {
      const room = getRoomConnectionState(webSocketConnectionReducer, this.pingRoom);
      if (room === null || room.hasJoined === undefined || room.hasJoined === false) {
        return (
          <Button
            disabled={room !== null && room.isJoining}
            flat
            onClick={this.joinWebSocketRoomPing}>
            {formatMessage({id: 'jfsWebSocket.pingJoinRoom'})}
          </Button>
        );
      } else {
        return (
          <Button
            flat
            onClick={this.leaveWebSocketRoomPing}>
            {formatMessage({id: 'jfsWebSocket.pingLeaveRoom'})}
          </Button>
        );
      }
    }
    return 'JfsWebSocket not connected!';
  }
}

const mapStateToProps = (state: Global.State, props) => ({
  ...props,
  webSocketConnectionReducer: state.Core.WebSocketConnection,
  jfs2JfsPingExampleReducer: state.App.jfs2JfsPingExampleReducer,
  config: state.App.configurationReducer.config,
  ...state.Core.Language
});

const enhance = compose(
  connect(mapStateToProps, { webSocketJoinRoomRequestAction, webSocketLeaveRoomRequestAction }),
  injectIntl
);

export default enhance(JfsWebSocketPingButton);
