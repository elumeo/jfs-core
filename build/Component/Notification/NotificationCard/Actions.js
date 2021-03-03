import React from 'react';
import { injectIntl } from 'react-intl';
import DismissButton from './DismissButton';
import HideButton from './HideButton';
import CustomActionButton from './CustomActionButton';
import { useDispatch } from 'react-redux';
const Actions = ({ intl: { formatMessage }, notification, topLevelRef: ref }) => {
    const dispatch = useDispatch();
    const { customActionTooltipTranslationId, customActionIconName, onCustomAction, dismissButtonVisible, onDismiss, hideButtonVisible, onHide, onCustomActionDispatch = [] } = notification;
    if ((!!onCustomAction || !!onCustomActionDispatch.length) && !customActionIconName) {
        throw new Error('If you provide a onCustomAction or onCustomActionDispatch you should also provide a customActionIconName');
    }
    const actions = [];
    if (dismissButtonVisible !== false) {
        actions.push(React.createElement(DismissButton, { key: `${notification.id}-dismiss`, topLevelRef: ref, notification: notification, onClick: onDismiss }));
    }
    if (hideButtonVisible !== false) {
        actions.push(React.createElement(HideButton, { key: `${notification.id}-hide`, topLevelRef: ref, notification: notification, onClick: onHide }));
    }
    if (!!onCustomAction || !!onCustomActionDispatch.length) {
        actions.push(React.createElement(CustomActionButton, { key: `${notification.id}-custom`, notification: notification, iconName: customActionIconName, tooltipLabel: customActionTooltipTranslationId
                ? formatMessage({ id: customActionTooltipTranslationId })
                : undefined, topLevelRef: ref, onClick: () => {
                if (!!onCustomAction) {
                    onCustomAction(notification, ref);
                }
                else {
                    onCustomActionDispatch.forEach(a => dispatch(a));
                }
            } }));
    }
    return (actions.length
        ? (React.createElement("div", { className: 'notification-grid-actions' }, actions))
        : null);
};
const enhance = injectIntl;
export default enhance(Actions);
//# sourceMappingURL=Actions.js.map