"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = exports.combine = void 0;
const combine = (...scripts) => (scripts.reduce((all, { name, command }) => (Object.assign(Object.assign({}, all), { [name]: command })), {}));
exports.combine = combine;
const add = (previous, scripts) => (Object.assign(Object.assign({}, previous), { scripts: Object.assign(Object.assign({}, previous.scripts), exports.combine(...scripts)) }));
exports.add = add;
//# sourceMappingURL=Script.js.map