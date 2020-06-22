"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Axios {
}
Axios.request = ({ client, method, path, type, parameters }) => (`${client}.${method}<${type}>(${[`'${path}'`, ...parameters].join(', ')})`);
exports.default = Axios;
//# sourceMappingURL=index.js.map