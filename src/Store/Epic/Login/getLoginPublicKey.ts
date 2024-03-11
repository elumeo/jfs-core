import {catchError, filter, switchMap} from 'rxjs/operators';
import {isActionOf} from 'typesafe-actions';
import {from} from 'rxjs';
import JSCApi from 'API/JSC';
import * as Action from 'Store/Action';
import {Epic} from 'Types/Redux';

const getLoginPublicKey: Epic = (action$) => action$.pipe(
  filter(isActionOf(Action.configLoadedAction)),
  switchMap(() => from(JSCApi.LoginClient.getLoginPublicKey()).pipe(
    switchMap(response => [Action.setPublicKey(response.data.publicKey)]),
    catchError(error => [Action.addErrorNotification(error)]),
  )),
);

export default getLoginPublicKey;
