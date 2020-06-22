class SharedStore {
    constructor(props) {
        this.reducer = null;
        this.epic = null;
        if (props.epic !== undefined) {
            this.epic = props.epic;
        }
        const reducerName = Object.keys(props).find(key => key !== 'epic');
        this.reducer = { [reducerName]: props[reducerName] };
    }
}
export default SharedStore;
//# sourceMappingURL=Store.js.map