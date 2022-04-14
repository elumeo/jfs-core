import React from 'react';
import _ from 'lodash';
import * as notistack from 'notistack';
import * as Type from 'Types/Notification';
import * as Button from './Button';
import { useSelector } from 'Types/Redux';
import Card from './Card';

const Notistack: React.FC = () => {
  const all = useSelector(state => state.Core.Notification.history);
  const isHistoryOpen = useSelector(state => state.Core.Notification.isHistoryOpen);
  const NotificationMax = useSelector(state => state.Core.Configuration.config.NotificationMax)
  const [shown, setShown] = React.useState<Type.Notification[]>([]);
  const snackbar = notistack.useSnackbar();

  React.useEffect(() => {
    const missing = _.differenceBy(all, shown, 'id');
    const deleted = _.differenceBy(shown, all, 'id');
    const persistentShown = shown.filter(n => n.notistackOptions?.persist);
    const requiredDismissCount = Math.max(0, persistentShown.length + missing.length - NotificationMax)
    for (let i = 0; i < requiredDismissCount; i++) {
      const notification = persistentShown.shift()
      notification.notistackOptions.persist = false
      snackbar.closeSnackbar(notification.id)
    }
    deleted.forEach(notification => {
      snackbar.closeSnackbar(notification.id)
    })
    if (!isHistoryOpen) {
      missing.forEach(notification => {
        const customAction = notification.action
        notification.action = (snackbar, id, temporary) => (
          <>
            {temporary && <Button.Dismiss onClick={() => snackbar.closeSnackbar(notification.id)}/>}
            {customAction && customAction(snackbar, notification.id, true)}
          </>
        )
        snackbar.enqueueSnackbar(
          <Card notification={notification} temporary/>,
          { ...notification.notistackOptions, key: notification.id },
        );
      });
    }
    if (missing.length) {
      setShown([...shown, ...missing]);
    }
  }, [all]);

  return null;
};

export default Notistack;
