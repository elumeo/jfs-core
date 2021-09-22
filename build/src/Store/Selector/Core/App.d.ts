import { State } from '../../../../Store/Reducer/Global';
export declare const appInitialized: import("reselect").OutputSelector<State, boolean, (res: import("../../Reducer/Core/App").State) => boolean>;
export declare const allowRobotLogin: import("reselect").OutputSelector<State, boolean, (res: import("../../Reducer/Core/App").State) => boolean>;
export declare const packageJson: import("reselect").OutputSelector<State, {
    version?: string;
}, (res: import("../../Reducer/Core/App").State) => {
    version?: string;
}>;
