export interface ICurrentGameState {
    data: string;
}
export declare const currentGameReducer: import("typesafe-actions").Reducer<ICurrentGameState, any> & {
    handlers: Record<any, (state: ICurrentGameState, action: any) => ICurrentGameState>;
};
