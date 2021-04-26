"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generate = void 0;
const Render_1 = __importDefault(require("../Render"));
const generate = ({ webSocketClient, core }) => Render_1.default.Text.lines(Render_1.default.EcmaScript.import({ what: '{ AxiosResponse }', from: 'axios' }), Render_1.default.EcmaScript.import({ what: '{ Observable }', from: 'rxjs' }), Render_1.default.EcmaScript.import({
    what: 'JscClient',
    from: (core
        ? './Client'
        : '@elumeo/jfs-core/build/API/JSC/Client')
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
                : '@elumeo/jfs-core/build/Store/Action/WebSocketAction')
        }),
        Render_1.default.EcmaScript.import({
            what: '{ IWebSocketRoom }',
            from: (core
                ? 'Store/Reducer/Core/WebSocketConnectionReducer'
                : '@elumeo/jfs-core/build/Store/Reducer/Core/WebSocketConnectionReducer')
        }),
    ]
    : []));
exports.generate = generate;
//# sourceMappingURL=Imports.js.map