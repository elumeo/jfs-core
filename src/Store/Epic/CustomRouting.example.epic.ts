
import { filter, tap, switchMap } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import * as Action from 'Store/Action';
import { Epic } from 'Types/Redux';

const test: Epic = (action$, state$, { history }) =>
    action$.pipe(
        filter(isActionOf(Action.customRoutingTest)),
        tap(({ payload, meta }) => console.log('locationChange e', payload, meta)),
        tap(({ payload, meta }) => {
            history.replace(payload + 'testdepepic')
            meta.replace(payload, { test: 'hi' })
        }),
        switchMap(() => [])
    );