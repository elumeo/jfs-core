import React from 'react';
import _NotificationCard from './_NotificationCard';
import './NotificationCard.scss';
class NotificationCard extends React.Component {
    render() {
        return (React.createElement(_NotificationCard, { notification: this.props.config, ref: this }));
    }
}
export { default as getContent } from './getContent';
export { default as getPlainText } from './getPlainText';
export { default as timeToRead } from './timeToRead';
export default NotificationCard;
//# sourceMappingURL=index.js.map