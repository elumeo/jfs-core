"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Location {
    constructor({ type, path }) {
        this.run = (type, callback) => {
            if (this.type === type) {
                callback();
            }
        };
        this.type = type;
        this.path = path;
    }
}
(function (Location) {
    let Type;
    (function (Type) {
        Type["LOCAL"] = "local";
        Type["REMOTE"] = "remote";
    })(Type = Location.Type || (Location.Type = {}));
})(Location || (Location = {}));
exports.default = Location;
//# sourceMappingURL=Location.js.map