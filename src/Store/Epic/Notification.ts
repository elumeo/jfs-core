import {filter, switchMap} from 'rxjs/operators';
import {Epic} from 'Types/Redux';
import {isActionOf} from 'typesafe-actions';
import * as Action from 'Store/Action';
import {v4 as uuid} from 'uuid';

const showError: Epic = action$ =>
    action$.pipe(
        filter(isActionOf(Action.addErrorNotification)),
        switchMap(({ payload }) => {
            const id = uuid();
            const responseData = payload?.response?.data ?? {};

            const title = responseData?.id ?? payload?.name;
            const subtitle = responseData?.message ?? payload?.message;
            const content = responseData?.error ?? null;

            return [Action.addNotification({
                id: id,
                title: title,
                subtitle: subtitle,
                content: content,
                httpDetails: payload.config.method.toUpperCase() + " " + payload.config.url + " " + (payload?.response?.status ?? ""),
                variant: 'error',
            })];
        })
    );

export default showError;