export * as Import from  './Import';
export * as DTO from './DTO';
export * as Client from './Client';

import * as Render from '..';
import * as DTO from './DTO';
import * as Type from '../Type';

export const namespace = ({ name, remote }: {
  name: string;
  remote: {
    dtos: Type.JSC.DTO.Namespace[];
    clients: Type.JSC.Client.Description[];
  }
}) => Render.TypeScript.namespace({
  name,
  what: Render.Text.lines(
    Render.EcmaScript.export(
      Render.TypeScript.interface({
        name: 'IUrlParams',
        lines: [
          'filter?: string;',
          'options?: string;',
          'searchString?: string;'
        ]
      })
    ),
    Render.EcmaScript.export(
      Render.TypeScript.interface({
        name: 'IJscClientConfig',
        lines: [
          'params?: IUrlParams;',
        ]
      })
    ),
    Render.EcmaScript.export(
      Render.TypeScript.namespace({
        name: 'DTO',
        what: Render.Text.lines(...remote.dtos.map(DTO.namespace))
      })
    ),
    Render.Text.lines(
      ...remote.clients.map(
        client => Render.EcmaScript.export(
          Render.TypeScript.namespace({
            name: name,
            what: Render.Text.lines(
              ...client.methods
                .filter(({ protocol }) => protocol.name === 'HTTP')
                .map(Render.JSC.Client.HTTP.request),
              ...client.methods
                .filter(({ protocol }) => protocol.name === 'WS')
                .map(Render.JSC.Client.WebSocket.stream)
            )
          })
        )
      )
    )
  )
})