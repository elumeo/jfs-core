class Emitter {
    constructor() {
        this.callbacks = {};
        this.on = (event, callback) => {
            if (!this.callbacks[event]) {
                this.callbacks[event] = [];
            }
            this.callbacks[event].push(callback);
        };
        this.emit = (event) => (this.callbacks[event].forEach(callback => callback()));
    }
}
class Core {
}
Core.Emitter = new Emitter();
//# sourceMappingURL=index.js.map