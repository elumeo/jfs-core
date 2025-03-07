import clippy from 'clippyts';
import { Agent, ClippyAgent, isValidAgent } from 'Types/Clippy.type';

export default function (agent: Agent): Promise<ClippyAgent> {
  return new Promise<ClippyAgent>((resolve, reject) => {
    if (!isValidAgent(agent)) {
      reject(new Error(`Agent ${agent} is not supported`));
      return;
    }

    clippy.load({
      name: agent,
      successCb: (agent: ClippyAgent) => {
        resolve(agent);
      },
      failCb: (error: Error) => {
        reject(error);
      }
    });
  });
}
