import Render from '../Render';

namespace Callback {
  export type Parameter = {
    name: string;
    annotation?: {
      type?: string;
      optional?: boolean;
    }
    type?: string;
    optional?: boolean;
    defaultValue?: string;
  };
}

const roomName = (resource: Client.Method.Resource) => (
  'ROOM_' + Array.from(resource.room).reduce(
    (text, character) => text + (
      character.charCodeAt(0) >= 65 && character.charCodeAt(0) <= 90
        ? `_${character}`
        : character.toUpperCase()
    ),
    ''
  )
);

namespace Client {
  export namespace Method {
    export type Name = string;
    export type Resource = {
      path: string;
      type: {
        name: string;
        generics: string[];
        array: boolean;
      };
      room: string;
    };
    export type Protocol = {
      name: 'HTTP' | 'WS';
      method: 'get' | 'put' | 'post' | 'patch' | 'delete' | 'join';
      namespace: 'Jsc2Jfs' | 'Jfs2Jsc';
    };
    export type Parameter = {
      name: string;
      type: string;
      optional: boolean;
    }
    export type Description = {
      name: Name;
      genericTypes: string[];
      resource: Resource;
      protocol: Protocol;
      parameters: Parameter[];
    }
  }

  export type Description = {
    name: string;
    methods: Method.Description[];
  }

  export type Request = (props: {
    parameters: Callback.Parameter[];
    protocol: Method.Protocol;
    resource: Method.Resource;
    generics?: string;
  }) => string;

  export type Stream = (props: {
    parameters: Callback.Parameter[];
    protocol: Method.Protocol;
    resource: Method.Resource;
    generics?: string;
  }) => string;

  export type Variable = (props: Client.Method.Description) => string;

  export type Namespace = (description: Client.Description) => string;
}

class Client {
  static replacePathParameters = (path: string) => {
    const match = path.match(/:[^\/]*/gm);
    if (!match) {
      return path;
    }
    else {
      return (
        path.match(/:[^\/]*/gm).reduce(
          (path: string, sequence: string): string => path.replace(
            sequence,
            `' + encodeURI(${sequence.substring(1)}) + '`
          ),
          path
        )
      );
    }
  }

  static stream: Client.Stream = ({
    protocol,
    resource
  }) => Render.Text.lines(
    Render.EcmaScript.export(
      Render.TypeScript.variable({
        name: roomName(resource),
        annotation: {
          type: 'IWebSocketRoom',
          optional: false
        },
        value: Render.JavaScript.object({
          properties: [
            { name: 'namespace', value: `'${protocol.namespace}'` },
            { name: 'room', value: `'${resource.room}'` }
          ]
        }),
        constant: true
      })
    ),
    Render.TypeScript.variable({
      name: `onRoomUpdate${Render.Text.capitalize(resource.room)}Subject`,
      value: `new Subject<${resource.type.name}${resource.type.array ? '[]' : ''}>()`,
      constant: true
    }),
    Render.TypeScript.variable({
      name: `onRoomUpdate${Render.Text.capitalize(resource.room)}$`,
      value: `onRoomUpdate${Render.Text.capitalize(resource.room)}Subject.asObservable()`,
      constant: true
    }),
    Render.EcmaScript.export(
      Render.TypeScript.variable({
        name: `onRoomUpdate${Render.Text.capitalize(resource.room)}`,
        value: Render.TypeScript.function({
          fatArrow: false,
          parameters: [
            {
              name: 'action',
              type: `PayloadAction${
                Render.TypeScript.generics(
                  `string`,
                  `JSCApi.DTO.WebSocket.IWebSocketRoomUpdateDTO${
                    Render.TypeScript.generics(
                      resource.type.name + (resource.type.array ? '[]' : '')
                    )
                  }`
                )
              }`
            }
          ],
          body: [
            Render.JavaScript.condition({
              condition: Render.JavaScript.and(
                Render.JavaScript.equal(
                  `action.type`,
                  `ROOM_UPDATE_ACTION_ID`
                ),
                Render.JavaScript.equal(
                  `action.payload.room`,
                  `${roomName(resource)}.room`
                )
              ),
              match: [
                `onRoomUpdate${Render.Text.capitalize(resource.room)}Subject.next(action.payload.data);`
              ]
            }),
            Render.JavaScript.return(`onRoomUpdate${Render.Text.capitalize(resource.room)}$`)
          ],
          returnAnnotation: {
            type: 'Observable' + Render.TypeScript.generics(
              resource.type.name + (resource.type.array ? '[]' : '')
            )
          }
        }),
        constant: true
      })
    )
  )

  static request: Client.Request = ({
    parameters,
    protocol,
    resource
  }) => {
    return (
      Render.TypeScript.function({
        fatArrow: {
          shortSyntax: true
        },
        parameters: [
          ...parameters.map(({ name, annotation }) => ({
            name,
            ...annotation
          })),
          {
            name: 'config',
            type: 'IJscClientConfig',
            optional: true
          }
        ],
        body: Render.Axios.request({
          client: 'JscClient',
          method: protocol.method,
          type: [
            resource.type.name,
            Render.TypeScript.generics(...resource.type.generics),
            resource.type.array ? '[]' : ''
          ].join(''),
          path: Client.replacePathParameters(resource.path),
          parameters: [
            ...parameters
              .filter(({ name }) => (
                !Client.replacePathParameters(resource.path)
                  .includes(`encodeURI(${name})`)
              ))
              .map(({ name }) => name),
            'config'
          ]
        }),
        returnAnnotation: {
          type: 'Promise' + Render.TypeScript.generics(
            'AxiosResponse' + Render.TypeScript.generics(
              resource.type.name + Render.TypeScript.generics(
                ...resource.type.generics
              ) + (resource.type.array ? '[]' : '')
            )
          )
        }
      })
    );
  }

  static namespace: Client.Namespace = ({ name, methods }) => (
    Render.TypeScript.namespace({
      name: name,
      what: Render.Text.lines(
        ...methods
          .filter(({ protocol }) => protocol.name === 'HTTP')
          .map(({ name, protocol, resource, parameters }) => Render.EcmaScript.export(
            Render.TypeScript.variable({
              name,
              value: Client.request({
                parameters: parameters.map(
                  ({ name, type, optional }) => ({
                    name,
                    annotation: { type, optional }
                  })
                ),
                protocol,
                resource
              })
            })
          )),
        ...methods
          .filter(({ protocol }) => protocol.name === 'WS')
          .map(description => Client.stream(description))
      )
    })
  );
}

export default Client;
