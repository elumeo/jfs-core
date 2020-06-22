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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const Prettier = __importStar(require("prettier"));
const Render_1 = __importDefault(require("../Render"));
const Imports_1 = __importDefault(require("./Imports"));
const Client_1 = __importDefault(require("./Client"));
const DTO_1 = __importDefault(require("./DTO"));
const Namespace_1 = __importDefault(require("./Namespace"));
class API {
}
API.Client = Client_1.default;
API.DTO = DTO_1.default;
API.Imports = Imports_1.default;
API.Namespace = Namespace_1.default;
API.preprocess = (api, description) => (Object.assign(Object.assign({}, description), { dtos: description.dtos.map((_a) => {
        var { dtos } = _a, group = __rest(_a, ["dtos"]);
        return (Object.assign(Object.assign({}, group), { dtos: dtos.map((_a) => {
                var { properties } = _a, dto = __rest(_a, ["properties"]);
                return (Object.assign(Object.assign({}, dto), { properties: Object.keys(properties).reduce((mappedProperties, key) => (Object.assign(Object.assign({}, mappedProperties), { [key]: Object.assign(Object.assign({}, properties[key]), { type: (properties[key].type.substring(0, 3) === 'DTO'
                                ? `${api.namespace}.${properties[key].type.split('.').reduce((text, sequence, index, array) => {
                                    return text + (index ? '.' : '') + (index === array.length - 1 ? 'I' : '') + sequence;
                                }, '')}`
                                : properties[key].type) }) })), {}) }));
            }) }));
    }), clients: description.clients.map((_a) => {
        var { methods } = _a, client = __rest(_a, ["methods"]);
        return (Object.assign(Object.assign({ methods: methods.map((_a) => {
                var { resource } = _a, method = __rest(_a, ["resource"]);
                return (Object.assign(Object.assign({}, method), { resource: Object.assign(Object.assign({}, resource), { type: Object.assign(Object.assign({}, resource.type), { name: (resource.type.name.substring(0, 3) === 'DTO'
                                ? `${api.namespace}.${resource.type.name.split('.').reduce((typeName, sequence, index, array) => (typeName.length
                                    ? ([
                                        typeName,
                                        index === array.length - 1
                                            ? 'I' + sequence
                                            : sequence
                                    ].join('.'))
                                    : sequence), '')}`
                                : resource.type.name) }) }) }));
            }) }, client), { name: client.name.replace('Controller', 'Client') }));
    }) }));
API.describe = ({ remote, onDescription }) => {
    return (axios_1.default.post(`http://${remote.host}${remote.path}`, remote.configuration)
        .then(({ data: description }) => onDescription(description))
        .catch((error) => console.log(error)));
};
API.format = code => Prettier.format(code, { parser: 'babel-ts' });
API.render = api => Render_1.default.Text.lines(API.Imports.generate(api.local), API.Namespace.generate({ name: api.local.namespace, remote: api.remote }), Render_1.default.EcmaScript.export(`default ${api.local.namespace}`));
API.generate = ({ description, options, onComplete }) => {
    const preprocessed = API.preprocess(options, description);
    const { dtos, clients } = preprocessed;
    onComplete(API.render({
        local: Object.assign(Object.assign({}, options), { webSocketClient: (clients
                .map(({ name }) => name)
                .includes('WebSocketClient')) }),
        remote: {
            dtos,
            clients
        }
    }));
};
exports.default = API;
//# sourceMappingURL=index.js.map