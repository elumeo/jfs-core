import { concatMap, filter } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import { of, EMPTY } from 'rxjs';
import * as Action from '../../Action';
import * as Token from '../../../API/LOCAL_STORAGE/Token';
const unauthorize = (action$, store) => (action$.pipe(filter(isActionOf(Action.unauthorizeSession)), concatMap(() => {
    Token.removeToken();
    return (store.value.Core.App.appInitialized
        ? EMPTY
        : of(Action.appInitialized()));
})));
export default unauthorize;
