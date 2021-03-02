import React, { useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import BaseRoute from './BaseRoute';
import useActions from '../../../Store/Action/useActions';
import { useSelector } from 'react-redux';
const AuthRoute = props => {
    const { enterAuthorizedRoute } = useActions();
    const { isAuthorized, isCheckingSession } = useSelector(state => ({
        isAuthorized: state.Core.Session.isAuthorized,
        isCheckingSession: state.Core.Session.isCheckingSession
    }));
    useEffect(() => {
        enterAuthorizedRoute();
    }, [props.path]);
    return (isAuthorized
        ? React.createElement(BaseRoute, Object.assign({}, props))
        : isCheckingSession
            ? React.createElement(CircularProgress, { id: 'check-session-progress' })
            : React.createElement(React.Fragment, null));
};
export default AuthRoute;
//# sourceMappingURL=AuthRoute.js.map