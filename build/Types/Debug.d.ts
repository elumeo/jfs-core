import { createSelector } from 'reselect';
import { PayloadAction, ActionCreator, PayloadActionCreator } from 'typesafe-actions';
export declare type Logger = {
    actions?: Array<(PayloadActionCreator<string, unknown> | ActionCreator<string>)>;
    mapper?: <T extends PayloadAction<string, unknown>>(action: T) => T extends PayloadAction<string, unknown> ? unknown : unknown;
    selector?: ReturnType<typeof createSelector>;
    filter?: <T extends PayloadAction<string, unknown>>(action: T) => boolean;
};
