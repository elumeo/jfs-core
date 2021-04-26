"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stream = void 0;
const Text = __importStar(require("../../Text"));
const TypeScript = __importStar(require("../../TypeScript"));
const EcmaScript = __importStar(require("../../EcmaScript"));
const Code = __importStar(require("../../Code"));
const roomName = (resource) => ('ROOM_' + Array.from(resource.room).reduce((text, character) => text + (character.charCodeAt(0) >= 65 && character.charCodeAt(0) <= 90
    ? `_${character}`
    : character.toUpperCase()), ''));
const stream = ({ protocol, resource }) => Text.lines(EcmaScript.export(Code.Declaration.constant({
    name: roomName(resource) + TypeScript.annotation({
        type: 'IWebSocketRoom',
        optional: false
    }),
    value: Code.Expression.object({
        properties: [
            { name: 'namespace', value: `'${protocol.namespace}'` },
            { name: 'room', value: `'${resource.room}'` }
        ]
    })
})), Code.Declaration.constant({
    name: `onRoomUpdate${Text.capitalize(resource.room)}Subject`,
    value: `new Subject<${resource.type.name}${resource.type.array ? '[]' : ''}>()`
}), Code.Declaration.constant({
    name: `onRoomUpdate${Text.capitalize(resource.room)}$`,
    value: `onRoomUpdate${Text.capitalize(resource.room)}Subject.asObservable()`,
}), EcmaScript.export(Code.Declaration.constant({
    name: `onRoomUpdate${Text.capitalize(resource.room)}`,
    value: TypeScript.function({
        arrow: false,
        parameters: [
            'action' + TypeScript.annotation({
                type: `PayloadAction${TypeScript.generics(`string`, `DTO.WebSocket.IWebSocketRoomUpdateDTO${TypeScript.generics(resource.type.name + (resource.type.array ? '[]' : ''))}`)}`
            })
        ],
        body: [
            Code.Flow.condition({
                condition: Code.Expression.and(Code.Expression.equal(`action.type`, `ROOM_UPDATE_ACTION_ID`), Code.Expression.equal(`action.payload.room`, `${roomName(resource)}.room`)),
                match: [
                    `onRoomUpdate${Text.capitalize(resource.room)}Subject.next(action.payload.data);`
                ]
            }),
            Code.Statement.return(`onRoomUpdate${Text.capitalize(resource.room)}$`)
        ],
        return: {
            type: 'Observable' + TypeScript.generics(resource.type.name + (resource.type.array ? '[]' : ''))
        }
    })
})));
exports.stream = stream;
//# sourceMappingURL=WebSocket.js.map