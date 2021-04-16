import React from 'react';
import { useSelector } from '../../Types/Redux';
import Indicator from './Status/Indicator';
const JscWebSocketStatus = () => {
    const config = useSelector(state => state.Core.Configuration.config);
    return (React.createElement("div", null,
        React.createElement(Indicator, { client: config.JscWebSocketClient }),
        React.createElement(Indicator, { client: config.JfsWebSocketClient })));
};
export default JscWebSocketStatus;
