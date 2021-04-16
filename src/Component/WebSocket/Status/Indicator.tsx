import React from 'react';
import * as Type from 'Types/Configuration';
import { useSelector } from 'Types/Redux';

export type Props = {
  client: Type.WebSocketClient;
};

const Indicator: React.FC<Props> = ({ client }) => {
  const isNamespaceConnected = useSelector(state => Boolean(
    client?.PrivateNamespace &&
    state.Core.WebSocket[client?.PrivateNamespace]?.isConnected
  ));
  return (
    <div
      style={{ width: 300 }}>
      WS {client.PrivateNamespace} Status: <span style={{
        background: (
          isNamespaceConnected
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
