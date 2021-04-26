"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.request = void 0;
const request = ({ client, method, path, type, parameters }) => (`${client}.${method}<${type}>(${[`'${path}'`, ...parameters].join(', ')})`);
exports.request = request;
//# sourceMappingURL=index.js.map