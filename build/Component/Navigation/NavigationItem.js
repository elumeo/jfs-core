import React from 'react';
import * as _ from 'lodash';
import FontIcon from 'react-md/lib/FontIcons';
import ListItem from 'react-md/lib/Lists/ListItem';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { closeNavigation } from '../../Store/Action/NavigationAction';
import International from '../International';
const NavigationItem = ({ iconName, messageId, onClick, active, messageString, authorizedOnly, unauthorizedOnly, isAuthorized, closeNavigation, onClickRoute, history }) => {
    const visible = (!authorizedOnly && !unauthorizedOnly || // always display these
        isAuthorized && authorizedOnly || // only when authorized
        !isAuthorized && unauthorizedOnly // only when unauthorized
    );
    return (visible
        ? (React.createElement(International, null, ({ formatMessage }) => (React.createElement(ListItem, { key: _.uniqueId('navItem_'), primaryText: messageString
                ? messageString
                : formatMessage({ id: messageId }), leftIcon: React.createElement(FontIcon, null, iconName), onClick: (event) => {
                const { location: { pathname } } = history;
                if (onClickRoute != undefined && pathname !== onClickRoute) {
                    history.push(onClickRoute);
                }
                closeNavigation();
                if (onClick) {
                    onClick(event);
                }
            }, active: active }))))
        : React.createElement(React.Fragment, null));
};
const mapStateToProps = (state, ownProps) => (Object.assign(Object.assign({}, ownProps), { isAuthorized: state.Core.Session.isAuthorized }));
const enhance = compose(connect(mapStateToProps, { closeNavigation }), withRouter);
export default enhance(NavigationItem);
//# sourceMappingURL=NavigationItem.js.map