
import Clippy from "clippyts/dist/agents/Clippy";
import Links from "clippyts/dist/agents/Links";
import { Agent } from 'Types/Clippy.type';


export const agents = {
  Clippy,
  Links,
} as const;

export function getAgent(name: Agent) {
  return agents[name];
}
