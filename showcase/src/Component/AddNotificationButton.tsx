import * as React from 'react';
import * as MUI from '@material-ui/core';
import { INotificationContent }from '@elumeo/jfs-core/build/Types/Notification';
import ErrorObject from 'Mock/ErrorObject.json';
import { useIntl } from 'react-intl';
import useActions from '@elumeo/jfs-core/build/Store/Action/useActions';
import useSelector from 'Types/Redux';
import { Language } from '@elumeo/jfs-core/build/Types/Language';
import { getLanguageStateSelector } from '@elumeo/jfs-core/build/Store/Selectors/Core/Language';

const useSampleNotifications = (): INotificationContent[] => {
  const Action = useActions();
  const language = useSelector(getLanguageStateSelector);
  return [
    {
      icon: 'star',
      translationId: 'app.notification.change.language',
      onClick: () => {
        const languages = ['de', 'en', 'it'];
        const newLanguage = languages[(languages.indexOf(language) + 1) % 3];
        Action.changeLanguageAction(newLanguage as Language);
      }
    },
    {
      translationId: 'app.title',
      onClick: ({ id }) => Action.dismissNotificationAction(id)
    },
    {
      icon: 'check',
      message: 'You did it, dude!\nEverything is done.\n – I can\'t get clicked',
      isSuccess: true
    },
    {
      error: ErrorObject,
      onClick: ({ error }) => Action.addToastAction({ contentError: error }),
      stayOnScreen: true,
    }
  ];
}

const AddNotificationButton: React.FC = () => {
  const { formatMessage } = useIntl();
  const Action = useActions();
  const notifications = useSelector(
    state => state.Core.Notification.notifications
  );

  const sampleNotifications = useSampleNotifications();

  React.useEffect(
    () => {
      if (notifications.length < 1) {
        Action.addNotificationAction(sampleNotifications[0]);
      }
    },
    []
  );

  const addRandomNotification = () => {
    const notifications = [...sampleNotifications];
    const randomIndex = Math.round(Math.random() * (notifications.length - 1));
    Action.addNotificationAction(notifications[randomIndex]);
  };

  return (
    <MUI.Button onClick={addRandomNotification}>
      {formatMessage({ id: 'Add Notification' })}
    </MUI.Button>
  );
}

export default AddNotificationButton;
