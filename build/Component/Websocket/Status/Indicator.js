import React from 'react';
import * as Selector from '../../../Store/Selector/Core/WebSocket';
import { useSelector } from '../../../Types/Redux';
const Indicator = ({ client }) => {
    const WebSocket = useSelector(state => state.Core.WebSocket);
    return (React.createElement("div", { style: { width: 300 } },
        "WS ",
        client.PrivateNamespace,
        " Status: ",
        React.createElement("span", { style: {
                background: (client !== undefined &&
                    Selector.isWebSocketNamespaceConnectedState(WebSocket, client.PrivateNamespace)
                    ? 'green'
                    : 'red'),
                borderRadius: '50%',
                width: 10,
                height: 10,
                display: 'inline-block'
            } })));
};
export default Indicator;
//# sourceMappingURL=Indicator.js.map