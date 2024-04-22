import * as Selector from 'Store/Selector/Core';
import { clippyDestroy, clippyInitialized, clippySay } from "Store/Action";
import { Epic } from "Types/Redux";
import { concatMap, timer, filter, map, switchMap, take, takeUntil } from "rxjs";
import { isActionOf } from "typesafe-actions";


const handleMessages: Epic = (action$, state$) =>
    action$.pipe(
        filter(isActionOf(clippyInitialized)),
        map(() => ({
            messages: Selector.ClippyConfig.pickConfigMessages(state$.value),
            interval: Selector.ClippyConfig.pickClippyInterval(state$.value),
            enabled: Selector.ClippyConfig.pickClippyEnabled(state$.value)

        })),
        filter(({ messages, interval, enabled }) => enabled && messages && interval > 0),
        switchMap(({ messages, interval }) => {
            return timer(0, interval).pipe(
                concatMap((index) => [clippySay(messages[index])]),
                take(messages.length),
            )
        }
        ),
        takeUntil(action$.pipe(filter(isActionOf([clippyDestroy])))),
    )
export default handleMessages