"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filter = exports.inScope = void 0;
const inScope = (which, scope) => (scope.includes('all') ||
    scope.includes(which));
exports.inScope = inScope;
const filter = (which, files) => (files.filter(file => exports.inScope(which, file.scope)));
exports.filter = filter;
//# sourceMappingURL=Script.js.map