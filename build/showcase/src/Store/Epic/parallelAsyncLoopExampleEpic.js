import { Observable, of, iif } from 'rxjs';
import { filter, switchMap, map, concatMap } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import { parallelAsyncLoopExampleRequestAction, parallelAsyncLoopExampleUpdateAction, parallelAsyncLoopExampleSuccessAction } from '../../../../Store/Action/parallelAsyncLoopExampleAction';
/**
 * This is an example of handling a list of async requests in an epic.
 * Check the redux developer panel to see what happened.
 * We do not depend on the order of given async requests.
 * For example: It doesn't matter whether the first async call will give us a response at first, second or even last time.
 */
export const parallelAsyncLoopExampleRequestActionEpic = action$ => {
    return action$.pipe(filter(isActionOf(parallelAsyncLoopExampleRequestAction)), map((action) => {
        return {
            factor: 100 / action.payload.length,
            items: action.payload,
            progress: 0
        };
    }), concatMap((data) => {
        let counter = 0; // counter will be increased every time a client call response is delivered ("then" method of promise)
        return new Observable((observer) => {
            for (let i = 0; i < data.items.length; i++) {
                window.setTimeout(() => {
                    counter++;
                    data.progress = counter * data.factor; // calculate the current progress
                    observer.next(data);
                    if (counter === data.items.length) {
                        observer.complete();
                    }
                }, (i === 2 ? 300 : 100)); // simulating unordered response time => 2nd call will response at last
            }
        });
    }), switchMap((data) => iif(() => data.progress < 100, // filter against the current progress
    of(parallelAsyncLoopExampleUpdateAction(data.progress)), // progress below 100%
    of(parallelAsyncLoopExampleUpdateAction(data.progress), parallelAsyncLoopExampleSuccessAction()) // progress reached 100%
    )));
};
//# sourceMappingURL=parallelAsyncLoopExampleEpic.js.map