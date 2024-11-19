import { AgentType } from 'clippyts/dist/types';
export type Agent = AgentType
export const Agent = {
    Clippy: 'Clippy',
    Bonzi: 'Bonzi',
    F1: 'F1',
    Genie: 'Genie',
    Genius: 'Genius',
    Links: 'Links',
    Merlin: 'Merlin',
    Peedy: 'Peedy',
    Rocky: 'Rocky',
    Rover: 'Rover'
} as const
export const AGENTS: Agent[] = ['Clippy', 'Bonzi', 'F1', 'Genie', 'Genius', 'Links', 'Merlin', 'Peedy', 'Rocky', 'Rover']
