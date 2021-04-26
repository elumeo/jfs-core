"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.namespace = exports.request = exports.stream = exports.replacePathParameters = exports.encodeURI = void 0;
const Render_1 = __importDefault(require("../Render"));
const roomName = (resource) => ('ROOM_' + Array.from(resource.room).reduce((text, character) => text + (character.charCodeAt(0) >= 65 && character.charCodeAt(0) <= 90
    ? `_${character}`
    : character.toUpperCase()), ''));
const encodeURI = (name) => `encodeURI(
  typeof ${name} === 'number'
    ? (${name} as number).toString()
    : ${name}
)`;
exports.encodeURI = encodeURI;
const replacePathParameters = (path) => {
    const match = path.match(/:[^\/]*/gm);
    if (!match) {
        return path;
    }
    else {
        return (path.match(/:[^\/]*/gm).reduce((path, sequence) => path.replace(sequence, `' + ${exports.encodeURI(sequence.substring(1))} + '`), path));
    }
};
exports.replacePathParameters = replacePathParameters;
const stream = ({ protocol, resource }) => Render_1.default.Text.lines(Render_1.default.EcmaScript.export(Render_1.default.TypeScript.variable({
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
exports.stream = stream;
const request = ({ parameters, protocol, resource }) => (Render_1.default.TypeScript.function({
    fatArrow: {
        shortSyntax: true
    },
    parameters: [
        ...parameters.map(({ name, annotation }) => (Object.assign({ name }, annotation))),
        {
            name: 'config',
            type: 'IJscClientConfig',
            optional: true
        }
    ],
    body: Render_1.default.Axios.request({
        client: 'JscClient',
        method: protocol.method,
        type: [
            resource.type.name,
            Render_1.default.TypeScript.generics(...resource.type.generics),
            resource.type.array ? '[]' : ''
        ].join(''),
        path: exports.replacePathParameters(resource.path),
        parameters: [
            ...parameters
                .filter(({ name }) => (!exports.replacePathParameters(resource.path)
                .includes(exports.encodeURI(name))))
                .map(({ name }) => name),
            'config'
        ]
    }),
    returnAnnotation: {
        type: 'Promise' + Render_1.default.TypeScript.generics('AxiosResponse' + Render_1.default.TypeScript.generics(resource.type.name + Render_1.default.TypeScript.generics(...resource.type.generics) + (resource.type.array ? '[]' : '')))
    }
}));
exports.request = request;
const namespace = ({ name, methods }) => (Render_1.default.TypeScript.namespace({
    name: name,
    what: Render_1.default.Text.lines(...methods
        .filter(({ protocol }) => protocol.name === 'HTTP')
        .map(({ name, protocol, resource, parameters }) => (Render_1.default.EcmaScript.export(Render_1.default.TypeScript.variable({
        name,
        value: exports.request({
            parameters: parameters.map(({ name, type, optional, array }) => ({
                name,
                annotation: { type, optional, array }
            })),
            protocol,
            resource
        })
    })))), ...methods
        .filter(({ protocol }) => protocol.name === 'WS')
        .map(description => exports.stream(description)))
}));
exports.namespace = namespace;
//# sourceMappingURL=Client.js.map