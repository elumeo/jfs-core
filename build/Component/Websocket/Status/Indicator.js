import React from 'react';
import { useSelector } from 'Types/Redux';
const Indicator = ({ client }) => {
    const isNamespaceConnected = useSelector(state => {
        var _a;
        return Boolean((client === null || client === void 0 ? void 0 : client.PrivateNamespace) &&
            ((_a = state.Core.WebSocket[client === null || client === void 0 ? void 0 : client.PrivateNamespace]) === null || _a === void 0 ? void 0 : _a.isConnected));
    });
    return (React.createElement("div", { style: { width: 300 } },
        "WS ",
        client.PrivateNamespace,
        " Status: ",
        React.createElement("span", { style: {
                background: (isNamespaceConnected
                    ? 'green'
                    : 'red'),
                borderRadius: '50%',
                width: 10,
                height: 10,
                display: 'inline-block'
            } })));
};
export default Indicator;
