import * as Type from '../../Type';
import * as Text from '../../Text';
import * as TypeScript from '../../TypeScript';
import * as EcmaScript from '../../EcmaScript';
import * as Code from '../../Code';

const roomName = (resource: Type.JSC.Client.Method.Resource) => (
  'ROOM_' + Array.from(resource.room).reduce(
    (text, character) => text + (
      character.charCodeAt(0) >= 65 && character.charCodeAt(0) <= 90
        ? `_${character}`
        : character.toUpperCase()
    ),
    ''
  )
);

export const stream: Type.JSC.Client.Stream = ({
  protocol,
  resource
}) => Text.lines(
  EcmaScript.export(
    Code.Declaration.constant({
      name: roomName(resource) + TypeScript.annotation({
        type: 'IWebSocketRoom',
        optional: false
      }),
      value: Code.Expression.object({
        properties: [
          { name: 'namespace', value: `'${protocol.namespace}'` },
          { name: 'room', value: `'${resource.room}'` }
        ]
      })
    })
  ),
  Code.Declaration.constant({
    name: `onRoomUpdate${Text.capitalize(resource.room)}Subject`,
    value: `new Subject<${resource.type.name}${resource.type.array ? '[]' : ''}>()`
  }),
  Code.Declaration.constant({
    name: `onRoomUpdate${Text.capitalize(resource.room)}$`,
    value: `onRoomUpdate${Text.capitalize(resource.room)}Subject.asObservable()`,
  }),
  EcmaScript.export(
    Code.Declaration.constant({
      name: `onRoomUpdate${Text.capitalize(resource.room)}`,
      value: TypeScript.function({
        arrow: false,
        parameters: [
          'action' + TypeScript.annotation({
            type: `PayloadAction${
              TypeScript.generics(
                `string`,
                `DTO.WebSocket.IWebSocketRoomUpdateDTO${
                  TypeScript.generics(
                    resource.type.name + (resource.type.array ? '[]' : '')
                  )
                }`
              )
            }`
          })
        ],
        body: [
          Code.Flow.condition({
            condition: Code.Expression.and(
              Code.Expression.equal(
                `action.type`,
                `ROOM_UPDATE_ACTION_ID`
              ),
              Code.Expression.equal(
                `action.payload.room`,
                `${roomName(resource)}.room`
              )
            ),
            match: [
              `onRoomUpdate${Text.capitalize(resource.room)}Subject.next(action.payload.data);`
            ]
          }),
          Code.Statement.return(`onRoomUpdate${Text.capitalize(resource.room)}$`)
        ],
        return: {
          type: 'Observable' + TypeScript.generics(
            resource.type.name + (resource.type.array ? '[]' : '')
          )
        }
      })
    })
  )
);