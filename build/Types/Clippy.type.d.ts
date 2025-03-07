import type { Agent as OriginalAgent } from 'clippyts';
import type { AgentType as OriginalAgentType } from 'clippyts/dist/types';
export declare const Agent: {
    readonly Clippy: "Clippy";
    readonly Links: "Links";
};
export type Agent = typeof Agent[keyof typeof Agent];
export declare const AGENTS: Agent[];
export type ClippyAgent = OriginalAgent;
export type ClippyAgentType = OriginalAgentType;
export declare function isValidAgent(agent: string): agent is Agent;
