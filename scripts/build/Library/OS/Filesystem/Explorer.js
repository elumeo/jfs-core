"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const fs_1 = require("fs");
class Explorer {
    constructor(start) {
        this.pathStack = () => (this.start.split(path_1.sep)
            .reduce((previous, current, _index, all) => Explorer.finalizeList(all, [...previous, Explorer.createPathItem(previous, current)]), []));
        this.explore = (pathPattern, onComplete) => onComplete(this.pathStack()
            .filter(path => fs_1.existsSync(pathPattern(path)))
            .reverse());
        this.start = start;
    }
}
Explorer.createPath = (descendants, segment) => [
    ...(descendants.length
        ? descendants.map(({ segment }) => segment)
        : ['']),
    segment
].join(path_1.sep);
Explorer.createPathItem = (previous, current) => ({
    segment: current,
    path: Explorer.createPath(previous, current)
});
Explorer.finalizeList = (all, newPrevious) => (all.length === newPrevious.length
    ? newPrevious.map(({ path }) => path)
    : newPrevious);
exports.default = Explorer;
//# sourceMappingURL=Explorer.js.map