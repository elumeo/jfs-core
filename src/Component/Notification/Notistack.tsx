import React from 'react';
import _ from 'lodash';
import * as notistack from 'notistack';
import { useSelector } from 'Types/Redux';
import * as Type from 'Types/Notification';
import Card from './Card';
import * as Button from './Button';

const Notistack: React.FC = () => {
  const all = useSelector(state => state.Core.Notification.history);
  const isHistoryOpen = useSelector(
    state => state.Core.Notification.isHistoryOpen,
  );
  const [shown, setShown] = React.useState<Type.Notification[]>([]);
  const snackbar = notistack.useSnackbar();

  React.useEffect(() => {
    const missing = _.differenceBy(all, shown, 'id');
    if (!isHistoryOpen) {
      missing.forEach(notification => {
        snackbar.enqueueSnackbar(
          <Card.Default notification={notification} temporary />,
          {
            key: notification.id,
            variant: notification.variant,
            action: (
              <>
                {notification.action &&
                  notification.action(snackbar, notification.id, true)}
                <Button.Dismiss
                  onClick={() => snackbar.closeSnackbar(notification.id)}
                />
              </>
            ),
          },
        );
      });
    }
    setShown([...shown, ...missing]);
  }, [all]);

  return null;
};

export default Notistack;
