import { Agent } from '../../../Types/Clippy.type';
export declare const agents: {
    readonly Clippy: import("clippyts/dist/types").AgentWrapper;
    readonly Links: import("clippyts/dist/types").AgentWrapper;
};
export declare function getAgent(name: Agent): import("clippyts/dist/types").AgentWrapper;
