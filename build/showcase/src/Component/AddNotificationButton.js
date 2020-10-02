import * as React from 'react';
import Button from 'react-md/lib/Buttons/Button';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { addNotificationAction, dismissNotificationAction } from '@elumeo/jfs-core/build/Store/Action/NotificationAction';
import { addToastAction } from '@elumeo/jfs-core/build/Store/Action/ToastAction';
import { changeLanguageAction } from '@elumeo/jfs-core/build/Store/Action/LanguageAction';
import ErrorObject from '../../../Mock/ErrorObject.json';
import { injectIntl } from 'react-intl';
class AddNotificationButton extends React.Component {
    constructor(props) {
        super(props);
        this.getSampleNotifications = () => [
            { icon: 'star', translationId: 'app.notification.change.language', onClick: this.changeLanguage },
            { translationId: 'app.title', onClick: n => this.props.dismissNotificationAction(n.id) },
            { icon: 'check', message: 'You did it, dude!\nEverything is done.\n – I can\'t get clicked', isSuccess: true },
            { error: ErrorObject, onClick: this.copyErrorToToast, stayOnScreen: true, }
        ];
        this.copyErrorToToast = (n) => {
            this.props.addToastAction({ contentError: n.error });
        };
        this.changeLanguage = () => {
            const { language } = this.props;
            const languages = ['de', 'en', 'it'];
            const newLanguage = languages[(languages.indexOf(language) + 1) % 3];
            this.props.changeLanguageAction(newLanguage);
        };
        this.addRandomNotification = () => {
            const notifications = this.getSampleNotifications();
            const randomIndex = Math.round(Math.random() * (notifications.length - 1));
            this.props.addNotificationAction(notifications[randomIndex]);
        };
        // Array(50).fill(null).map(() => {
        //   this.props.addNotificationAction(this.notifications[Math.round(Math.random() * 3)]);
        // });
        if (props.notifications.length < 1) {
            this.props.addNotificationAction(this.getSampleNotifications()[0]);
        }
    }
    render() {
        const { intl: { formatMessage } } = this.props;
        return React.createElement(Button, { flat: true, onClick: this.addRandomNotification }, formatMessage({ id: 'Add Notification' }));
    }
}
const mapStateToProps = (s, p) => (Object.assign(Object.assign(Object.assign({}, p), s.Core.Notification), s.Core.Language));
const enhance = compose(connect(mapStateToProps, {
    changeLanguageAction,
    addNotificationAction,
    dismissNotificationAction,
    addToastAction
}), injectIntl);
export default enhance(AddNotificationButton);
//# sourceMappingURL=AddNotificationButton.js.map