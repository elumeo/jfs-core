"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.or = exports.and = exports.equal = void 0;
const equal = (first, second) => `${first} === ${second}`;
exports.equal = equal;
const and = (first, second) => `${first} && ${second}`;
exports.and = and;
const or = (first, second) => `${first} || ${second}`;
exports.or = or;
//# sourceMappingURL=Expression.js.map