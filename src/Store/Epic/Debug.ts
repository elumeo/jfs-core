import { combineEpics } from 'redux-observable';
import { isActionOf } from 'typesafe-actions';
import { Epic } from 'Types/Redux';
import * as Action from './../Action'
import { filter as rxFilter, switchMap, catchError, map } from 'rxjs/operators';
import JSCApi from 'API/JSC';
import { from } from 'rxjs';
import { Configuration } from './../Selector/Core/Configuration';


const register: Epic = (action$, state$) =>
    action$.pipe(
        rxFilter(() => Configuration(state$.value)?.DebugMode),
        rxFilter(isActionOf(Action.Debug.register)),
        map(({ payload: { actions, filter, mapper } }) => ({ actions, filter, mapper })),
        switchMap(({ actions, filter, mapper }) =>
            action$.pipe(
                rxFilter(isActionOf(actions)),
                rxFilter(filter),
                map(mapper),
                map(Action.Debug.log)
            )
        )
    )

const post: Epic = (action$, _, { intl }) =>
    action$.pipe(
        rxFilter(isActionOf(Action.Debug.post)),
        map(({ payload }) => JSON.stringify(payload)),
        switchMap((payload) =>
            from(JSCApi.DebugNotificationClient.sendToMattermost({ payload }))
                .pipe(
                    switchMap(() => [Action.addToastAction({ contentMessage: intl().formatMessage({ id: 'debug.submitted' }) })]),
                    catchError((e) => [Action.addErrorNotification(e)])
                )
        )
    )

export default combineEpics(register, post)