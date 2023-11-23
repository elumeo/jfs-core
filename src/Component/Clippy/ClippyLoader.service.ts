import clippy, { type Agent } from 'clippyts';
export default (agent: string) =>
  new Promise<Agent>((resolve, reject) =>
    clippy.load({
      name: agent,
      successCb: (agent: Agent) => {
        resolve(agent);
      },
      failCb: (error) => {
        reject(error);
      },
    }
    )

  )
