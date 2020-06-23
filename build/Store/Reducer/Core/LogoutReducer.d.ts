declare namespace Logout {
    type State = {
        logoutOpen: boolean;
        logoutPending: boolean;
    };
}
declare const Logout: import("typesafe-actions").Reducer<Logout.State, any> & {
    handlers: Record<never, (state: Logout.State, action: any) => Logout.State>;
    handleAction: <TType extends any, TCreator extends (...args: any[]) => any, TNextNotHandledAction extends Exclude<any, import("typesafe-actions").Action<TType> & ReturnType<TCreator>>, TAction extends any extends ReturnType<TCreator> ? any : never>(singleOrMultipleCreatorsAndTypes: TType | TCreator | TType[] | TCreator[], reducer: (state: Logout.State, action: TAction) => Logout.State) => [TNextNotHandledAction] extends [never] ? import("typesafe-actions").Reducer<Logout.State, any> & {
        handlers: Record<any, (state: Logout.State, action: any) => Logout.State>;
    } : import("typesafe-actions").Reducer<Logout.State, any> & {
        handlers: Record<Exclude<any, TNextNotHandledAction>["type"], (state: Logout.State, action: any) => Logout.State>;
        handleAction: <TType_1 extends TNextNotHandledAction["type"], TCreator_1 extends (...args: any[]) => TNextNotHandledAction, TNextNotHandledAction_1 extends Exclude<TNextNotHandledAction, import("typesafe-actions").Action<TType_1> & ReturnType<TCreator_1>>, TAction_1 extends TNextNotHandledAction extends import("typesafe-actions").Action<TType_1> ? TNextNotHandledAction extends ReturnType<TCreator_1> ? TNextNotHandledAction : never : never>(singleOrMultipleCreatorsAndTypes: TType_1 | TCreator_1 | TType_1[] | TCreator_1[], reducer: (state: Logout.State, action: TAction_1) => Logout.State) => [TNextNotHandledAction_1] extends [never] ? import("typesafe-actions").Reducer<Logout.State, any> & {
            handlers: Record<any, (state: Logout.State, action: any) => Logout.State>;
        } : import("typesafe-actions").Reducer<Logout.State, any> & {
            handlers: Record<Exclude<any, TNextNotHandledAction_1>["type"], (state: Logout.State, action: any) => Logout.State>;
            handleAction: <TType_2 extends TNextNotHandledAction_1["type"], TCreator_2 extends (...args: any[]) => TNextNotHandledAction_1, TNextNotHandledAction_2 extends Exclude<TNextNotHandledAction_1, import("typesafe-actions").Action<TType_2> & ReturnType<TCreator_2>>, TAction_2 extends TNextNotHandledAction_1 extends import("typesafe-actions").Action<TType_2> ? TNextNotHandledAction_1 extends ReturnType<TCreator_2> ? TNextNotHandledAction_1 : never : never>(singleOrMultipleCreatorsAndTypes: TType_2 | TCreator_2 | TType_2[] | TCreator_2[], reducer: (state: Logout.State, action: TAction_2) => Logout.State) => [TNextNotHandledAction_2] extends [never] ? import("typesafe-actions").Reducer<Logout.State, any> & {
                handlers: Record<any, (state: Logout.State, action: any) => Logout.State>;
            } : import("typesafe-actions").Reducer<Logout.State, any> & {
                handlers: Record<Exclude<any, TNextNotHandledAction_2>["type"], (state: Logout.State, action: any) => Logout.State>;
                handleAction: <TType_3 extends TNextNotHandledAction_2["type"], TCreator_3 extends (...args: any[]) => TNextNotHandledAction_2, TNextNotHandledAction_3 extends Exclude<TNextNotHandledAction_2, import("typesafe-actions").Action<TType_3> & ReturnType<TCreator_3>>, TAction_3 extends TNextNotHandledAction_2 extends import("typesafe-actions").Action<TType_3> ? TNextNotHandledAction_2 extends ReturnType<TCreator_3> ? TNextNotHandledAction_2 : never : never>(singleOrMultipleCreatorsAndTypes: TType_3 | TCreator_3 | TType_3[] | TCreator_3[], reducer: (state: Logout.State, action: TAction_3) => Logout.State) => [TNextNotHandledAction_3] extends [never] ? import("typesafe-actions").Reducer<Logout.State, any> & {
                    handlers: Record<any, (state: Logout.State, action: any) => Logout.State>;
                } : import("typesafe-actions").Reducer<Logout.State, any> & {
                    handlers: Record<Exclude<any, TNextNotHandledAction_3>["type"], (state: Logout.State, action: any) => Logout.State>;
                    handleAction: <TType_4 extends TNextNotHandledAction_3["type"], TCreator_4 extends (...args: any[]) => TNextNotHandledAction_3, TNextNotHandledAction_4 extends Exclude<TNextNotHandledAction_3, import("typesafe-actions").Action<TType_4> & ReturnType<TCreator_4>>, TAction_4 extends TNextNotHandledAction_3 extends import("typesafe-actions").Action<TType_4> ? TNextNotHandledAction_3 extends ReturnType<TCreator_4> ? TNextNotHandledAction_3 : never : never>(singleOrMultipleCreatorsAndTypes: TType_4 | TCreator_4 | TType_4[] | TCreator_4[], reducer: (state: Logout.State, action: TAction_4) => Logout.State) => [TNextNotHandledAction_4] extends [never] ? import("typesafe-actions").Reducer<Logout.State, any> & {
                        handlers: Record<any, (state: Logout.State, action: any) => Logout.State>;
                    } : import("typesafe-actions").Reducer<Logout.State, any> & {
                        handlers: Record<Exclude<any, TNextNotHandledAction_4>["type"], (state: Logout.State, action: any) => Logout.State>;
                        handleAction: <TType_5 extends TNextNotHandledAction_4["type"], TCreator_5 extends (...args: any[]) => TNextNotHandledAction_4, TNextNotHandledAction_5 extends Exclude<TNextNotHandledAction_4, import("typesafe-actions").Action<TType_5> & ReturnType<TCreator_5>>, TAction_5 extends TNextNotHandledAction_4 extends import("typesafe-actions").Action<TType_5> ? TNextNotHandledAction_4 extends ReturnType<TCreator_5> ? TNextNotHandledAction_4 : never : never>(singleOrMultipleCreatorsAndTypes: TType_5 | TCreator_5 | TType_5[] | TCreator_5[], reducer: (state: Logout.State, action: TAction_5) => Logout.State) => [TNextNotHandledAction_5] extends [never] ? import("typesafe-actions").Reducer<Logout.State, any> & {
                            handlers: Record<any, (state: Logout.State, action: any) => Logout.State>;
                        } : import("typesafe-actions").Reducer<Logout.State, any> & {
                            handlers: Record<Exclude<any, TNextNotHandledAction_5>["type"], (state: Logout.State, action: any) => Logout.State>;
                            handleAction: <TType_6 extends TNextNotHandledAction_5["type"], TCreator_6 extends (...args: any[]) => TNextNotHandledAction_5, TNextNotHandledAction_6 extends Exclude<TNextNotHandledAction_5, import("typesafe-actions").Action<TType_6> & ReturnType<TCreator_6>>, TAction_6 extends TNextNotHandledAction_5 extends import("typesafe-actions").Action<TType_6> ? TNextNotHandledAction_5 extends ReturnType<TCreator_6> ? TNextNotHandledAction_5 : never : never>(singleOrMultipleCreatorsAndTypes: TType_6 | TCreator_6 | TType_6[] | TCreator_6[], reducer: (state: Logout.State, action: TAction_6) => Logout.State) => [TNextNotHandledAction_6] extends [never] ? import("typesafe-actions").Reducer<Logout.State, any> & {
                                handlers: Record<any, (state: Logout.State, action: any) => Logout.State>;
                            } : import("typesafe-actions").Reducer<Logout.State, any> & {
                                handlers: Record<Exclude<any, TNextNotHandledAction_6>["type"], (state: Logout.State, action: any) => Logout.State>;
                                handleAction: <TType_7 extends TNextNotHandledAction_6["type"], TCreator_7 extends (...args: any[]) => TNextNotHandledAction_6, TNextNotHandledAction_7 extends Exclude<TNextNotHandledAction_6, import("typesafe-actions").Action<TType_7> & ReturnType<TCreator_7>>, TAction_7 extends TNextNotHandledAction_6 extends import("typesafe-actions").Action<TType_7> ? TNextNotHandledAction_6 extends ReturnType<TCreator_7> ? TNextNotHandledAction_6 : never : never>(singleOrMultipleCreatorsAndTypes: TType_7 | TCreator_7 | TType_7[] | TCreator_7[], reducer: (state: Logout.State, action: TAction_7) => Logout.State) => [TNextNotHandledAction_7] extends [never] ? import("typesafe-actions").Reducer<Logout.State, any> & {
                                    handlers: Record<any, (state: Logout.State, action: any) => Logout.State>;
                                } : import("typesafe-actions").Reducer<Logout.State, any> & {
                                    handlers: Record<Exclude<any, TNextNotHandledAction_7>["type"], (state: Logout.State, action: any) => Logout.State>;
                                    handleAction: <TType_8 extends TNextNotHandledAction_7["type"], TCreator_8 extends (...args: any[]) => TNextNotHandledAction_7, TNextNotHandledAction_8 extends Exclude<TNextNotHandledAction_7, import("typesafe-actions").Action<TType_8> & ReturnType<TCreator_8>>, TAction_8 extends TNextNotHandledAction_7 extends import("typesafe-actions").Action<TType_8> ? TNextNotHandledAction_7 extends ReturnType<TCreator_8> ? TNextNotHandledAction_7 : never : never>(singleOrMultipleCreatorsAndTypes: TType_8 | TCreator_8 | TType_8[] | TCreator_8[], reducer: (state: Logout.State, action: TAction_8) => Logout.State) => [TNextNotHandledAction_8] extends [never] ? import("typesafe-actions").Reducer<Logout.State, any> & {
                                        handlers: Record<any, (state: Logout.State, action: any) => Logout.State>;
                                    } : import("typesafe-actions").Reducer<Logout.State, any> & {
                                        handlers: Record<Exclude<any, TNextNotHandledAction_8>["type"], (state: Logout.State, action: any) => Logout.State>;
                                        handleAction: <TType_9 extends TNextNotHandledAction_8["type"], TCreator_9 extends (...args: any[]) => TNextNotHandledAction_8, TNextNotHandledAction_9 extends Exclude<TNextNotHandledAction_8, import("typesafe-actions").Action<TType_9> & ReturnType<TCreator_9>>, TAction_9 extends TNextNotHandledAction_8 extends import("typesafe-actions").Action<TType_9> ? TNextNotHandledAction_8 extends ReturnType<TCreator_9> ? TNextNotHandledAction_8 : never : never>(singleOrMultipleCreatorsAndTypes: TType_9 | TCreator_9 | TType_9[] | TCreator_9[], reducer: (state: Logout.State, action: TAction_9) => Logout.State) => [TNextNotHandledAction_9] extends [never] ? import("typesafe-actions").Reducer<Logout.State, any> & {
                                            handlers: Record<any, (state: Logout.State, action: any) => Logout.State>;
                                        } : import("typesafe-actions").Reducer<Logout.State, any> & {
                                            handlers: Record<Exclude<any, TNextNotHandledAction_9>["type"], (state: Logout.State, action: any) => Logout.State>;
                                            handleAction: <TType_10 extends TNextNotHandledAction_9["type"], TCreator_10 extends (...args: any[]) => TNextNotHandledAction_9, TNextNotHandledAction_10 extends Exclude<TNextNotHandledAction_9, import("typesafe-actions").Action<TType_10> & ReturnType<TCreator_10>>, TAction_10 extends TNextNotHandledAction_9 extends import("typesafe-actions").Action<TType_10> ? TNextNotHandledAction_9 extends ReturnType<TCreator_10> ? TNextNotHandledAction_9 : never : never>(singleOrMultipleCreatorsAndTypes: TType_10 | TCreator_10 | TType_10[] | TCreator_10[], reducer: (state: Logout.State, action: TAction_10) => Logout.State) => [TNextNotHandledAction_10] extends [never] ? import("typesafe-actions").Reducer<Logout.State, any> & {
                                                handlers: Record<any, (state: Logout.State, action: any) => Logout.State>;
                                            } : import("typesafe-actions").Reducer<Logout.State, any> & any;
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    };
};
export default Logout;
