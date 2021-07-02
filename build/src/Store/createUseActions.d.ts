declare const createUseActions: <T extends {
    [name: string]: Function;
}>(Action: T) => () => T;
export default createUseActions;
