import React from 'react';
import { connect } from 'react-redux';
import Card from 'react-md/lib/Cards/Card';
import FontIcon from 'react-md/lib/FontIcons/FontIcon';
import './NotificationCard.scss';
import ErrorContent, { errorText } from '../Snackbar/ErrorContent';
import { dismissNotificationAction, fadeNotificationOffScreenAction } from '../../Store/Action/NotificationAction';
import { Badge, Button, CardText } from 'react-md';
import Format from '../../Utilities/Format';
import { timeToRead as _timeToRead } from '../Snackbar/TimeToRead';
export const timeToRead = (notification) => getContent(notification).timeToRead;
export const getPlainText = (notification) => getContent(notification).words;
export const getContent = (notification) => {
    const { message, translationId, error } = notification;
    const { formatMessage } = Format.Translations;
    if (!((message ? 1 : 0) ^ (translationId ? 1 : 0) ^ (error ? 1 : 0))) {
        throw new Error(`Either 'message', 'translationId' or 'error' most be specified.`);
    }
    let content = null;
    let words = '';
    if (message) {
        words = typeof message == 'object' ? message.join(' ') : message;
        content = typeof message == 'object' ? React.createElement("ul", null, message.map((m, i) => React.createElement("li", { key: i }, m))) : message;
    }
    if (translationId) {
        words = typeof translationId == 'object' ? translationId.map(tId => formatMessage({ id: tId })).join(' ') : translationId;
        content = typeof translationId == 'object'
            ? React.createElement("ul", null, translationId.map((tId, i) => React.createElement("li", { key: i }, formatMessage({ id: tId }))))
            : formatMessage({ id: translationId });
    }
    if (error) {
        const { body, head } = errorText(error);
        words = `${formatMessage({ id: 'app.error' })}: ${body} ${head}`;
        content = React.createElement(ErrorContent, { contentError: error });
    }
    return {
        words,
        content: React.createElement(CardText, { className: 'md-text--inherit' }, content),
        timeToRead: _timeToRead(words)
    };
};
class NotificationCard extends React.Component {
    constructor() {
        super(...arguments);
        this.getBadge = () => {
            const { config: { count, id } } = this.props;
            return count <= 1
                ? null
                : React.createElement(Badge, { primary: true, circular: true, className: 'badge', badgeId: `count_of_${id}`, badgeContent: `${count}x` },
                    React.createElement(FontIcon, null, " "));
        };
        this.getHeader = () => {
            return React.createElement("header", { className: 'header' },
                this.getIcon(),
                this.getTimestamp());
        };
        this.getContent = () => getContent(this.props.config).content;
        this.getIcon = () => {
            const { config: { icon, error, isError, isSuccess } } = this.props;
            let iconName = icon;
            iconName = (error || isError) && !icon ? 'error' : iconName;
            iconName = isSuccess && !icon ? 'check' : iconName;
            return iconName ? React.createElement(FontIcon, { className: 'icon md-text--inherit' }, iconName) : null;
        };
        this.getTimestamp = () => {
            const { config: { timestamp } } = this.props;
            const { formatDate, formatTime } = Format;
            const now = new Date();
            const displayDate = now.toDateString() != timestamp.toDateString();
            return React.createElement("div", { className: 'timestamp' },
                displayDate ? `${formatDate(timestamp)} ` : null,
                formatTime(timestamp));
        };
        this.getActions = () => {
            const { config, config: { customActionTooltipTranslationId, customActionIconName, onCustomAction, dismissButtonVisible, onDismiss, hideButtonVisible, onHide } } = this.props;
            const { formatMessage } = Format.Translations;
            const fm = id => formatMessage({ id });
            if (!(!onCustomAction) && !customActionIconName) {
                throw new Error('If you provide a onCustomAction you should also provide a customActionIconName');
            }
            const actions = [];
            if (dismissButtonVisible !== false) {
                actions.push(React.createElement(Button, { icon: true, key: 'dismiss-btn', onClick: event => {
                        event.stopPropagation();
                        this.props.dismissNotificationAction(config.id);
                        if (typeof onDismiss == 'function') {
                            onDismiss(config, this);
                        }
                    } }, "close"));
            }
            if (hideButtonVisible !== false) {
                actions.push(React.createElement(Button, { icon: true, key: 'hide-btn', onClick: event => {
                        event.stopPropagation();
                        this.props.fadeNotificationOffScreenAction(config.id);
                        if (typeof onHide == 'function') {
                            onHide(config, this);
                        }
                    } }, "arrow_forward"));
            }
            if (!(!onCustomAction)) {
                actions.push(React.createElement(Button, { icon: true, key: 'custom-action-btn', tooltipLabel: customActionTooltipTranslationId ? fm(customActionTooltipTranslationId) : undefined, tooltipPosition: 'left', tooltipDelay: 666, onClick: () => onCustomAction(config, this) }, customActionIconName));
            }
            return actions;
        };
    }
    componentDidMount() {
        const { config, config: { onMount } } = this.props;
        if (typeof onMount == 'function') {
            onMount(config, this);
        }
    }
    render() {
        const { config, config: { error, isSuccess, isError, onClick } } = this.props;
        const errorClass = isError || error ? 'error' : '';
        const successClass = isSuccess ? 'success' : '';
        const clickClass = onClick ? 'clickable' : '';
        if (errorClass.length && successClass.length) {
            throw new Error('isError|error and isSuccess cannot be combined');
        }
        const actions = this.getActions();
        return (React.createElement(Card, { onClick: () => {
                if (onClick) {
                    onClick(config, this);
                }
            }, className: [
                `md-cell`, `md-cell--12`,
                `badges__notifications__notification`,
                successClass, errorClass, clickClass
            ].join(' ') },
            this.getBadge(),
            React.createElement("div", { className: 'notification-grid' },
                React.createElement("div", { className: 'notification-grid-content' },
                    this.getHeader(),
                    this.getContent()),
                actions.length ? React.createElement("div", { className: 'notification-grid-actions' }, actions) : null)));
    }
}
export default connect((store, ownProps) => (Object.assign(Object.assign({}, ownProps), { language: store.Core.Language.language })), {
    dismissNotificationAction,
    fadeNotificationOffScreenAction,
})(NotificationCard);
//# sourceMappingURL=NotificationCard.js.map