import { Epic } from 'redux-observable';
/**
 * This is an example of handling a list of async requests in an epic.
 * Check the redux developer panel to see what happened.
 * We do not depend on the order of given async requests.
 * For example: It doesn't matter whether the first async call will give us a response at first, second or even last time.
 */
export declare const parallelAsyncLoopExampleRequestActionEpic: Epic;
