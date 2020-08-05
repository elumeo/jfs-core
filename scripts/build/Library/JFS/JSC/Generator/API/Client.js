"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Render_1 = __importDefault(require("../Render"));
const roomName = (resource) => ('ROOM_' + Array.from(resource.room).reduce((text, character) => text + (character.charCodeAt(0) >= 65 && character.charCodeAt(0) <= 90
    ? `_${character}`
    : character.toUpperCase()), ''));
class Client {
}
Client.replacePathParameters = (path) => {
    const match = path.match(/:[^\/]*/gm);
    if (!match) {
        return path;
    }
    else {
        return (path.match(/:[^\/]*/gm).reduce((path, sequence) => path.replace(sequence, `\${encodeURI(${sequence.substring(1)})}`), path));
    }
};
Client.stream = ({ protocol, resource }) => Render_1.default.Text.lines(Render_1.default.EcmaScript.export(Render_1.default.TypeScript.variable({
    name: roomName(resource),
    annotation: {
        type: 'IWebSocketRoom',
        optional: false
    },
    value: Render_1.default.JavaScript.object({
        properties: [
            { name: 'namespace', value: `'${protocol.namespace}'` },
            { name: 'room', value: `'${resource.room}'` }
        ]
    }),
    constant: true
})), Render_1.default.TypeScript.variable({
    name: `onRoomUpdate${Render_1.default.Text.capitalize(resource.room)}Subject`,
    value: `new Subject<${resource.type.name}${resource.type.array ? '[]' : ''}>()`,
    constant: true
}), Render_1.default.TypeScript.variable({
    name: `onRoomUpdate${Render_1.default.Text.capitalize(resource.room)}$`,
    value: `onRoomUpdate${Render_1.default.Text.capitalize(resource.room)}Subject.asObservable()`,
    constant: true
}), Render_1.default.EcmaScript.export(Render_1.default.TypeScript.variable({
    name: `onRoomUpdate${Render_1.default.Text.capitalize(resource.room)}`,
    value: Render_1.default.TypeScript.function({
        fatArrow: false,
        parameters: [
            {
                name: 'action',
                type: `PayloadAction${Render_1.default.TypeScript.generics(`string`, `JSCApi.DTO.WebSocket.IWebSocketRoomUpdateDTO${Render_1.default.TypeScript.generics(resource.type.name + (resource.type.array ? '[]' : ''))}`)}`
            }
        ],
        body: [
            Render_1.default.JavaScript.condition({
                condition: Render_1.default.JavaScript.and(Render_1.default.JavaScript.equal(`action.type`, `ROOM_UPDATE_ACTION_ID`), Render_1.default.JavaScript.equal(`action.payload.room`, `${roomName(resource)}.room`)),
                match: [
                    `onRoomUpdate${Render_1.default.Text.capitalize(resource.room)}Subject.next(action.payload.data);`
                ]
            }),
            Render_1.default.JavaScript.return(`onRoomUpdate${Render_1.default.Text.capitalize(resource.room)}$`)
        ],
        returnAnnotation: {
            type: 'Observable' + Render_1.default.TypeScript.generics(resource.type.name + (resource.type.array ? '[]' : ''))
        }
    }),
    constant: true
})));
Client.request = ({ parameters, protocol, resource }) => (Render_1.default.TypeScript.function({
    fatArrow: {
        shortSyntax: true
    },
    body: Render_1.default.Axios.request({
        client: 'JscClient',
        method: protocol.method,
        type: `${resource.type.name}${Render_1.default.TypeScript.generics(...resource.type.generics)}`,
        path: resource.path,
        parameters: [
            ...parameters
                .filter(({ name }) => (!Client.replacePathParameters(resource.path)
                .includes(`encodeURI(${name})`)))
                .map(({ name }) => name),
            `config`
        ]
    }),
    parameters: [
        ...parameters,
        {
            name: 'config',
            type: 'IJscClientConfig',
            optional: true
        }
    ],
    returnAnnotation: {
        type: 'Promise' + Render_1.default.TypeScript.generics('AxiosResponse' + Render_1.default.TypeScript.generics(resource.type.name + Render_1.default.TypeScript.generics(...resource.type.generics)))
    }
}));
Client.namespace = ({ name, methods }) => (Render_1.default.TypeScript.namespace({
    name: name,
    what: Render_1.default.Text.lines(...methods
        .filter(({ protocol }) => protocol.name === 'HTTP')
        .map(({ protocol, resource, parameters }) => Render_1.default.EcmaScript.export(Render_1.default.TypeScript.variable({
        name,
        value: Client.request({
            parameters: parameters.map(({ name, type, optional }) => ({
                name,
                annotation: { type, optional }
            })),
            protocol,
            resource
        })
    }))), ...methods
        .filter(({ protocol }) => protocol.name === 'WS')
        .map(description => Client.stream(description)))
}));
exports.default = Client;
//# sourceMappingURL=Client.js.map