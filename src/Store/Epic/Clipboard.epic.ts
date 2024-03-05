import { addToastAction } from 'Store/Action';
import { copyToClipboard } from 'Store/Action/Clipboard.action';
import { Epic } from 'Types/Redux';
import { catchError, filter, from, map, switchMap } from 'rxjs';
import { isActionOf } from 'typesafe-actions';
import { copyToClipboard as copy } from 'API/EventHandler.api'

const handleCopy: Epic = (action$) =>
    action$.pipe(
        filter(isActionOf([copyToClipboard])),
        map(({ payload }) => payload),
        switchMap((payload) => {
            return from(copy(payload.text)).pipe(
                switchMap(
                    ({ success }) => [
                        addToastAction({
                            contentTranslationId: payload?.succcessMessage ?? 'app.copyToClipboard.success',
                            isSuccess: success,
                            isError: !success,
                        })]
                ),
                catchError(({ success }) => [addToastAction({
                    contentTranslationId: payload?.errorMessage ?? 'app.copyToClipboard.failure',
                    isSuccess: success,
                    isError: !success,
                })])
            );
        })
    );

export default handleCopy;