import Render from '../Render';
import DTO from './DTO';
import Client from './Client';

class Namespace {
  static DTO = DTO;
  static Client = Client;

  static generate = ({ name, remote }: {
    name: string;

    remote: {
      dtos: DTO.Group[];
      clients: Client.Description[];
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
          what: Render.Text.lines(
            ...remote.dtos.map(
              description => Namespace.DTO.group(description)
            ).map(Render.EcmaScript.export)
          )
        })
      ),
      Render.Text.lines(
        ...remote.clients.map(
          client => Render.EcmaScript.export(Namespace.Client.namespace(client))
        )
      )
    )
  })
}

export default Namespace;
