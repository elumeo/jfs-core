import Render from '../Render';

class Imports {
  static generate = ({
    webSocketClient,
    core
  }: {
    core: boolean;
    webSocketClient: boolean;
  }) => Render.Text.lines(
    Render.EcmaScript.import({ what: '{ AxiosResponse }', from: 'axios' }),
    Render.EcmaScript.import({ what: '{ Observable }', from: 'rxjs' }),
    Render.EcmaScript.import({
      what: 'JscClient',
      from: (
        core
          ? '../Client'
          : 'Core/Jsc/Client'
      )
    }),
    ...(
      webSocketClient
        ? [
          Render.EcmaScript.import({ what: '{ Subject }', from: 'rxjs' }),
          Render.EcmaScript.import({
            what: '{ PayloadAction }',
            from: 'typesafe-actions'
          }),
          Render.EcmaScript.import({
            what: '{ ROOM_UPDATE_ACTION_ID }',
            from: (
              core
                ? 'Action/WebSocketAction'
                : 'Core/Store/Action/WebSocketAction'
            )
          }),
          Render.EcmaScript.import({
            what: '{ IWebSocketRoom }',
            from: (
              core
                ? 'Store/Reducer/Core/WebSocketConnectionReducer'
                : 'Core/Store/Reducer/Core/WebSocketConnectionReducer'
            )
          }),
        ]
        : []
    )
  )
}

export default Imports;
