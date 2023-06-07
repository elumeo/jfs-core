import React from 'react';
import * as Type from 'Types/Configuration';
export declare type Props = {
    client: Type.WebSocketClient;
    roomName: string;
};
declare const Indicator: React.FC<Props>;
export default Indicator;
