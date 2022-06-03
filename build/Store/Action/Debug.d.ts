import { useSelector } from 'react-redux';
import { Logger } from '../../Types/Debug';
export declare const register: import("typesafe-actions").PayloadActionCreator<"CORE/DEBUGGER/register", Required<Omit<Logger, "selector">>>;
export declare const log: import("typesafe-actions").PayloadActionCreator<"CORE/DEBUGGER/log", unknown>;
export declare const post: import("typesafe-actions").PayloadActionCreator<"CORE/DEBUGGer/mattermost/post", {
    description: string;
    state: ReturnType<typeof useSelector>;
}>;
