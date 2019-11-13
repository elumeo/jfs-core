import { Types } from 'typesafe-actions';
export declare type RootAction = Types extends {
    RootAction: infer T;
} ? T : any;
