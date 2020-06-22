"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Render_1 = __importDefault(require("../Render"));
class Imports {
}
Imports.generate = ({ webSocketClient, core }) => Render_1.default.Text.lines(Render_1.default.EcmaScript.import({
    what: '{ AxiosRequestConfig, AxiosResponse }',
    from: 'axios'
}), Render_1.default.EcmaScript.import({ what: '{ Observable }', from: 'rxjs' }), Render_1.default.EcmaScript.import({
    what: 'JscClient',
    from: (core
        ? '../Client'
        : 'Core/Jsc/Client')
}), ...(webSocketClient
    ? [
        Render_1.default.EcmaScript.import({ what: '{ Subject }', from: 'rxjs' }),
        Render_1.default.EcmaScript.import({
            what: '{ PayloadAction }',
            from: 'typesafe-actions'
        }),
        Render_1.default.EcmaScript.import({
            what: '{ ROOM_UPDATE_ACTION_ID }',
            from: (core
                ? 'Action/WebSocketAction'
                : 'Core/Store/Action/WebSocketAction')
        }),
        Render_1.default.EcmaScript.import({
            what: '{ IWebSocketRoom }',
            from: (core
                ? 'Store/Reducer/WebSocketConnectionReducer'
                : 'Core/Store/Reducer/Core/WebSocketConnectionReducer')
        }),
    ]
    : []));
exports.default = Imports;
//# sourceMappingURL=Imports.js.map