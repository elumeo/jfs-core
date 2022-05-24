import { isActionOf } from 'typesafe-actions';
import { Epic } from 'Types/Redux';
import * as Action from 'Store/Action'
import { filter, switchMap, catchError } from 'rxjs/operators';
import JSCApi from 'API/JSC';
import { from } from 'rxjs';

const post: Epic = (action$) =>
    action$.pipe(
        filter(isActionOf(Action.Debug.post)),
        switchMap(({ payload }) => {
            return from(JSCApi.DebugNotificationClient.sendToMattermost({ payload }))
                .pipe(
                    switchMap(() => [Action.addToastAction({ contentMessage: 'Debug-Report versendet' })]),
                    catchError((e) => [Action.addErrorNotification(e)])
                )
        })
    )

export default post