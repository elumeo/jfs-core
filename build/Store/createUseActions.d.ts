declare const createUseActions: <T extends Record<string, unknown>>(Action: T) => () => T;
export default createUseActions;
