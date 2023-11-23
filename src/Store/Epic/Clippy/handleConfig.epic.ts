import { configLoadedAction } from 'Store/Action';
import { pickClippyConfig } from 'Store/Selector/Core/Configuration';
import { Epic } from 'Types/Redux';
import { filter, map, switchMap } from 'rxjs';
import { isActionOf } from 'typesafe-actions';


const init: Epic = (action$, state$) =>
  action$.pipe(
    filter(isActionOf(configLoadedAction)),
    filter(({ payload }) => payload?.config?.ClippyConfig?.enabled),
    switchMap(() => [])
  )
//  i need a feature, that will do the following:
//load clippyConfig with pickClippyConfig selector
//if clippyConfig is enabled, and an interval is higher than 0, then
//create an interval that will dispatch a clippyAction with a random message. if the interval is less than 0,
//it should instead emit the clippyAction at a random interval between 0 and 600 seconds:

//if clippyConfig is not enabled, then it should do nothing.
//the clippyAction should have a payload of the message that was selected from the clippyConfig.
//start now with only the code and without stating i





