import type { Agent as OriginalAgent } from 'clippyts';
import type { AgentType as OriginalAgentType } from 'clippyts/dist/types';

export const Agent = {
    Clippy: 'Clippy',
    Links: 'Links',
} as const;

export type Agent = typeof Agent[keyof typeof Agent];
export const AGENTS: Agent[] = ['Clippy', 'Links'];
export type ClippyAgent = OriginalAgent;
export type ClippyAgentType = OriginalAgentType;
export function isValidAgent(agent: string): agent is Agent {
    return AGENTS.includes(agent as Agent);
}
