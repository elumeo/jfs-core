import React from 'react';
import _ from 'lodash';
import * as notistack from 'notistack';
import { useSelector } from 'Types/Redux';
import * as Type from 'Types/Notification';

const Notistack: React.FC = () => {
  const all = useSelector(state => state.Core.Notification.history);
  const [shown, setShown] = React.useState<Type.Notification[]>([]);
  const snackbar = notistack.useSnackbar();

  React.useEffect(
    () => {
      const missing = _.differenceBy(all, shown, 'id');
      console.log(missing);
      missing.forEach(notification => snackbar.enqueueSnackbar(
        notification.content,
        {
          key: notification.id,
          variant: notification.error ? 'error' : 'default',
          ...(
            notification.action
              ? { action: notification?.action(snackbar, notification.id) }
              : {}
          )
        }
      ));
      setShown([...shown, ...missing]);
    },
    [all]
  );

  return null;
};

export default Notistack;
