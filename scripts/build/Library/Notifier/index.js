"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Notfier {
}
Notfier.framedMessage = (message) => Notfier.multiLineMessage('', '-------------------------------------------------------------------------------------------------------------', '', message, '', '-------------------------------------------------------------------------------------------------------------', '');
Notfier.multiLineMessage = (...messageLines) => [
    ...messageLines
].join(`\n`);
exports.default = Notfier;
//# sourceMappingURL=index.js.map