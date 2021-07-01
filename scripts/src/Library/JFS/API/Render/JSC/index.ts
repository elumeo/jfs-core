export * as Import from  './Import';
export * as DTO from './DTO';
export * as Client from './Client';
import * as DTO from './DTO';
import * as TypeScript from '../TypeScript';
import * as Text from '../Text';
import * as Type from '../Type';
import * as EcmaScript from '../EcmaScript';
import * as Client from './Client';

export const namespace = ({ name, remote }: {
  name: string;
  remote: {
    dtos: Type.JSC.DTO.Namespace[];
    clients: Type.JSC.Client.Description[];
  }
}) => TypeScript.namespace({
  name,
  what: Text.lines(
    EcmaScript.export(
      TypeScript.interface({
        name: 'IUrlParams',
        lines: [
          'filter?: string;',
          'options?: string;',
          'searchString?: string;'
        ]
      })
    ),
    EcmaScript.export(
      TypeScript.interface({
        name: 'IJscClientConfig',
        lines: [
          'params?: IUrlParams;',
        ]
      })
    ),
    EcmaScript.export(
      TypeScript.namespace({
        name: 'DTO',
        what: Text.lines(
          ...(
            remote.dtos
              .map(DTO.namespace)
              .map(EcmaScript.export)
          )
        )
      })
    ),
    Text.lines(
      ...remote.clients.map(
        client => EcmaScript.export(
          TypeScript.namespace({
            name: client.name,
            what: Text.lines(
              ...client.methods
                .filter(({ protocol }) => protocol.name === 'HTTP')
                .map(Client.HTTP.request),
              ...client.methods
                .filter(({ protocol }) => protocol.name === 'WS')
                .map(Client.WebSocket.stream)
            )
          })
        )
      )
    )
  )
})