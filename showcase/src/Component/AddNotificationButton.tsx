import * as React from 'react';
import Button from 'react-md/lib/Buttons/Button';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { INotification, INotificationContent } from 'Core/Types/Notification';
import { addNotificationAction, dismissNotificationAction } from 'Core/Store/Action/NotificationAction';
import { addToastAction } from 'Core/Store/Action/ToastAction';
import { changeLanguageAction } from 'Core/Store/Action/LanguageAction';
import { IToastConfig } from 'Core/Store/Reducer/Core/ToastReducer';

import Global from 'Store/Reducer';

import ErrorObject from 'Mock/ErrorObject.json';

import { injectIntl, InjectedIntlProps } from 'react-intl';

export interface IAddNotificationButtonProps extends InjectedIntlProps {
  addNotificationAction?: typeof addNotificationAction;
  dismissNotificationAction?: typeof dismissNotificationAction;
  addToastAction?: (c: IToastConfig) => void;
  changeLanguageAction?: (lang) => void;
  language?: string;
}

class AddNotificationButton extends React.Component<IAddNotificationButtonProps> {

  constructor(props) {
    super(props);
    // Array(50).fill(null).map(() => {
    //   this.props.addNotificationAction(this.notifications[Math.round(Math.random() * 3)]);
    // });
    if (props.notifications.length < 1) {
      this.props.addNotificationAction(this.getSampleNotifications()[0]);
    }
  }

  getSampleNotifications = (): INotificationContent[] => [
    { icon: 'star', translationId: 'app.notification.change.language', onClick: this.changeLanguage },
    { translationId: 'app.title', onClick: n => this.props.dismissNotificationAction(n.id) },
    { icon: 'check', message: 'You did it, dude!\nEverything is done.\n – I can\'t get clicked', isSuccess: true },
    { error: ErrorObject, onClick: this.copyErrorToToast, stayOnScreen: true,  }
  ];

  copyErrorToToast = (n: INotification) => {
    this.props.addToastAction({ contentError: n.error });
  };

  changeLanguage = () => {
    const { language } = this.props;
    const languages = ['de', 'en', 'it'];
    const newLanguage = languages[(languages.indexOf(language) + 1) % 3];
    this.props.changeLanguageAction(newLanguage);
  };

  addRandomNotification = () => {
    const notifications = this.getSampleNotifications();
    const randomIndex = Math.round(Math.random() * (notifications.length - 1));
    this.props.addNotificationAction(notifications[randomIndex]);
  };

  render() {
    const { intl: { formatMessage } } = this.props;
    return <Button flat onClick={this.addRandomNotification}>{formatMessage({ id: 'Add Notification' })}</Button>;
  }
}

const mapStateToProps = (s: Global.State, p) => ({
  ...p,
  ...s.Core.Notification,
  ...s.Core.Language
});

const enhance = compose(
  connect(mapStateToProps, {
    changeLanguageAction,
    addNotificationAction,
    dismissNotificationAction,
    addToastAction
  }),
  injectIntl
);

export default enhance(AddNotificationButton);
