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
exports.request = exports.encodeURI = void 0;
const Axios = __importStar(require("../../Axios"));
const TypeScript = __importStar(require("../../TypeScript"));
const EcmaScript = __importStar(require("../../EcmaScript"));
const Code = __importStar(require("../../Code"));
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
const request = ({ name, protocol, resource, parameters }) => (EcmaScript.export(Code.Declaration.constant({
    name,
    value: (({ parameters, protocol, resource }) => (TypeScript.function({
        arrow: {
            short: true
        },
        parameters: [
            ...parameters.map(({ name, annotation }) => (name + TypeScript.annotation(annotation))),
            'config' + TypeScript.annotation({
                type: 'IJscClientConfig',
                optional: true
            })
        ],
        body: Axios.request({
            client: 'JscClient',
            method: protocol.method,
            type: [
                resource.type.name,
                TypeScript.generics(...resource.type.generics),
                resource.type.array ? '[]' : ''
            ].join(''),
            path: replacePathParameters(resource.path),
            parameters: [
                ...parameters
                    .filter(({ name }) => (!replacePathParameters(resource.path)
                    .includes(exports.encodeURI(name))))
                    .map(({ name }) => name),
                'config'
            ]
        }),
        return: {
            type: 'Promise' + TypeScript.generics('AxiosResponse' + TypeScript.generics(resource.type.name + TypeScript.generics(...resource.type.generics) + (resource.type.array ? '[]' : '')))
        }
    })))({
        parameters: parameters.map(({ name, type, optional, array }) => ({
            name,
            annotation: { type, optional, array }
        })),
        protocol,
        resource
    })
})));
exports.request = request;
//# sourceMappingURL=HTTP.js.map