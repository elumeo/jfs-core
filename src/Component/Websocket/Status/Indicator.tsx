import React from 'react';
import * as Type from 'Types/Configuration';
import * as Selector from 'Store/Selector/Core/WebSocket';
import { useSelector } from 'Types/Redux';

export type Props = {
  client: Type.WebSocketClient;
};

const Indicator: React.FC<Props> = ({ client }) => {
  const WebSocket = useSelector(state => state.Core.WebSocket);
  return (
    <div
      style={{ width: 300 }}>
      WS {client.PrivateNamespace} Status: <span style={{
        background: (
          client !== undefined &&
          Selector.isWebSocketNamespaceConnectedState(
            WebSocket,
            client.PrivateNamespace
          )
            ? 'green'
            : 'red'
        ),
        borderRadius: '50%',
        width: 10,
        height: 10,
        display: 'inline-block'
      }}/>
    </div>
  );
}

export default Indicator;
