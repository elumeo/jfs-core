import React from 'react';
import { injectIntl } from 'react-intl';
import DismissButton from './DismissButton';
import HideButton from './HideButton';
import CustomActionButton from './CustomActionButton';
const Actions = ({ intl: { formatMessage }, notification, topLevelRef: ref }) => {
    const { customActionTooltipTranslationId, customActionIconName, onCustomAction, dismissButtonVisible, onDismiss, hideButtonVisible, onHide } = notification;
    if (!(!onCustomAction) && !customActionIconName) {
        throw new Error('If you provide a onCustomAction you should also provide a customActionIconName');
    }
    const actions = [];
    if (dismissButtonVisible !== false) {
        actions.push(React.createElement(DismissButton, { topLevelRef: ref, notification: notification, onClick: onDismiss }));
    }
    if (hideButtonVisible !== false) {
        actions.push(React.createElement(HideButton, { topLevelRef: ref, notification: notification, onClick: onHide }));
    }
    if (!!onCustomAction) {
        actions.push(React.createElement(CustomActionButton, { notification: notification, iconName: customActionIconName, tooltipLabel: customActionTooltipTranslationId
                ? formatMessage({ id: customActionTooltipTranslationId })
                : undefined, topLevelRef: ref, onClick: onCustomAction }));
    }
    return (actions.length
        ? (React.createElement("div", { className: 'notification-grid-actions' }, actions))
        : null);
};
const enhance = injectIntl;
export default enhance(Actions);
//# sourceMappingURL=Actions.js.map