import axios from 'axios';
import * as Prettier from 'prettier';
import Render from '../Render';
import Imports from './Imports';
import Client from './Client';
import DTO from './DTO';
import Namespace from './Namespace';
import { API } from './Types';
import Text from 'Library/Text';

class API {
  static Client = Client;
  static DTO = DTO;
  static Imports = Imports;
  static Namespace = Namespace;

  static preprocess: API.Static.Preprocess = (
    api, description
  ) => ({
    ...description,
    dtos: description.dtos.map(
      ({ dtos, ...group }) => ({
        ...group,
        dtos: dtos.map(
          ({ properties, ...dto }) => ({
            ...dto,
            properties: Object.keys(properties).reduce(
              (mappedProperties, key) => ({
                ...mappedProperties,
                [key]: {
                  ...properties[key],
                  type: (
                    properties[key].type.substring(0, 3) === 'DTO'
                      ? `${api.namespace}.${properties[key].type.split('.').reduce(
                        (text, sequence, index, array) => {
                          return text +(index ? '.' : '') +(index === array.length -1 ? 'I' : '') +sequence;
                        },
                        ''
                      )}`
                      : properties[key].type
                  )
                }
              }),
              {}
            )
          })
        )
      })
    ),
    clients: description.clients.map(
      ({ methods, ...client }) => ({
        methods: methods.map(
          ({ resource, ...method }) => ({
            ...method,
            resource: {
              ...resource,
              type: {
                ...resource.type,
                name: (
                  resource.type.name.substring(0, 3) === 'DTO'
                    ? `${api.namespace}.${resource.type.name.split('.').reduce(
                      (typeName, sequence, index, array) => (
                        typeName.length
                          ? (
                            [
                              typeName,
                              index === array.length -1
                                ? 'I' + sequence
                                : sequence
                            ].join('.')
                          )
                          : sequence
                      ),
                      ''
                    )}`
                    : resource.type.name
                ),
                generics: resource.type.generics.map(
                  generic => [
                    api.namespace,
                    generic.substring(0, 3) === 'DTO'
                      ? generic.split('.').reduce(
                        (typeName, sequence, index, array) => (
                          typeName.length
                            ? (
                              [
                                typeName,
                                index === array.length -1
                                  ? 'I' + sequence
                                  : sequence
                              ].join('.')
                            )
                            : sequence
                        ),
                        ''
                      )
                      : generic
                  ].join('.')
                )
              }
            },
            parameters: method.parameters.map(parameter => {
              if (Text.beginsWith(parameter.type, 'DTO')) {
                return {
                  ...parameter,
                  type: parameter.type.substring(0, 3) === 'DTO'
                    ? `${api.namespace}.${parameter.type.split('.').reduce(
                      (typeName, sequence, index, array) => (
                        typeName.length
                          ? (
                            [
                              typeName,
                              index === array.length -1
                                ? 'I' + sequence
                                : sequence
                            ].join('.')
                          )
                          : sequence
                      ),
                      ''
                    )}`
                    : parameter.type
                }
              }
              else {
                return parameter;
              }
            })
          })
        ),
        ...client,
        name: client.name.replace('Controller', 'Client')
      })
    )
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
