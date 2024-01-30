import clippy, { type Agent } from 'clippyts';
export default function (agent: string) {
  return new Promise<Agent>((resolve, reject) =>
    clippy.load({
      name: agent,
      successCb: (agent: Agent) => {
        console.log('clippy loaded', { agent })
        resolve(agent);
      },
      failCb: (error) => {
        reject(error);
      },
    }
    )

  )
}