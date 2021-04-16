import { filter, switchMap } from 'rxjs/operators';
import * as TA from 'typesafe-actions';
import * as Action from '../../Action';
import { WSClient } from '../../../API/WS/WSClient';
import _ from 'lodash';
const connectSuccess = (action$, state$) => action$.pipe(filter(TA.isActionOf(Action.webSocketConnectSuccessAction)), switchMap(action => {
    // Filter configRooms against information in state (hasJoined true/false)
    let configRooms = [];
    const config = state$.value.Core.Configuration.config;
    if (config.JscWebSocketClient !== undefined && action.payload === config.JscWebSocketClient.PrivateNamespace) {
        configRooms = (config.JscWebSocketClient.AutoRoomSubscriptions === undefined) ? [] : config.JscWebSocketClient.AutoRoomSubscriptions;
    }
    if (config.JfsWebSocketClient !== undefined && action.payload === config.JfsWebSocketClient.PrivateNamespace) {
        configRooms = (config.JfsWebSocketClient.AutoRoomSubscriptions === undefined) ? [] : config.JfsWebSocketClient.AutoRoomSubscriptions;
    }
    const stateJoinedRooms = [];
    const stateLeftRooms = [];
    for (const stateRoom of state$.value.Core.WebSocket[action.payload].rooms) {
        if (stateRoom.hasJoined) {
            stateJoinedRooms.push(stateRoom.name);
        }
        else {
            stateLeftRooms.push(stateRoom.name);
        }
    }
    const cleanedConfigRooms = [];
    for (const configRoom of configRooms) {
        const preparedConfigRoom = WSClient.prepareRoomName(configRoom, state$.value);
        let foundInLeftRoom = false;
        for (const leftRoom of stateLeftRooms) {
            if (preparedConfigRoom === leftRoom) {
                foundInLeftRoom = true;
                break;
            }
        }
        if (foundInLeftRoom === false) {
            cleanedConfigRooms.push(preparedConfigRoom);
        }
    }
    let mergedRooms = _.uniq([...cleanedConfigRooms, ...stateJoinedRooms]);
    const roomActions = [];
    for (const room of mergedRooms) {
        const roomData = {
            namespace: action.payload,
            room
        };
        roomActions.push(Action.webSocketJoinRoomRequestAction(roomData));
    }
    return roomActions;
}));
export default connectSuccess;
//# sourceMappingURL=connectSuccess.js.map