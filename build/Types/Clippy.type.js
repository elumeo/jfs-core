"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidAgent = exports.AGENTS = exports.Agent = void 0;
exports.Agent = {
    Clippy: 'Clippy',
    Links: 'Links',
};
exports.AGENTS = ['Clippy', 'Links'];
function isValidAgent(agent) {
    return exports.AGENTS.includes(agent);
}
exports.isValidAgent = isValidAgent;
