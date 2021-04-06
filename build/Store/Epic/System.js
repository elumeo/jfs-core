import React from 'react';
import { from, of } from 'rxjs';
import { catchError, filter, switchMap } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import JSCApi from '../../API/JSC';
import * as Action from '../Action';
import uuid from 'uuid';
import * as Notification from '../../Component/Notification';
import RandomNotificationButton from 'RandomNotificationButton';
const getRegion = action$ => (action$.pipe(filter(isActionOf(Action.configLoadedAction)), switchMap(() => from(JSCApi.SystemClient.getRegion()).pipe(switchMap((response) => of(Action.regionLoaded(response && response.data || null), Action.addNotification({
    id: uuid(),
    content: 'ASDADASD1',
    action: (snackbar, id) => (React.createElement(Notification.Button.Dismiss, { onClick: () => snackbar.closeSnackbar(id) })),
    variant: 'error',
}), Action.addNotification({
    id: uuid(),
    title: 'ASDADASD2',
    variant: 'warning',
    action: () => React.createElement(RandomNotificationButton, null)
}), Action.addNotification({
    id: uuid(),
    subtitle: 'untertitle',
    title: 'titel',
    content: 'inhalte',
    variant: 'success',
}), Action.addNotification({
    id: uuid(),
    content: 'ASDADASD3',
    variant: 'default',
}), Action.addNotification({
    id: uuid(),
    content: 'ASDADASD3',
    variant: 'info',
}))))), catchError(() => of(Action.getRegionFailed()))));
export default getRegion;
//# sourceMappingURL=System.js.map