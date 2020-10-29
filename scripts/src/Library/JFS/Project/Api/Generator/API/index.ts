import axios from 'axios';
import * as Prettier from 'prettier';
import Render from '../Render';
import Imports from './Imports';
import Client from './Client';
import DTO from './DTO';
import Namespace from './Namespace';
import { API } from './Types';
import Text from 'Library/Text';
import Preprocessor from './Preprocessor';

class API {
  static Client = Client;
  static DTO = DTO;
  static Imports = Imports;
  static Namespace = Namespace;

  static preprocess: API.Static.Preprocess = (
    api, description
  ) => ({
    ...description,
    dtos: Preprocessor.mapDTOs(description.dtos, api),
    clients: Preprocessor.mapClients(description.clients, api)
  });

  static describe: API.Static.Describe = ({
    remote, onDescription
  }) => {
    const url = `${remote.host}${remote.path}`;
    const protocols = ['http', 'https'];
    return (
      axios.post<API.Description>(
        protocols.some(protocol => Text.beginsWith(url, protocol))
          ? url
          : `http://${url}`,
        remote.configuration
      )
        .then(({ data: description }) => onDescription(description))
        .catch((error) => console.log(error))
    );
  }

  static format: API.Static.Format = code => Prettier.format(
    code,
    { parser: 'babel-ts' }
  );

  static render: API.Static.Render = api => Render.Text.lines(
    API.Imports.generate(api.local),
    API.Namespace.generate({ name: api.local.namespace, remote: api.remote }),
    Render.EcmaScript.export(`default ${api.local.namespace}`)
  );

  static generate: API.Static.Generate = ({
    description,
    options,
    onComplete
  }) => {
    const preprocessed = API.preprocess(options, description);
    const { dtos, clients } = preprocessed;

    onComplete(
      API.render({
        local: {
          ...options,
          webSocketClient: (
            clients
              .map(({ name }) => name)
              .includes('WebSocketClient')
          )
        },
        remote: {
          dtos,
          clients
        }
      })
    );
  }
}


export default API;
