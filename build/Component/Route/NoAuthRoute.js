import React, { useEffect } from 'react';
import BaseRoute from './BaseRoute';
import useActions from '../../Store/useActions';
const NoAuthRoute = props => {
    const { enterUnauthorizedRoute } = useActions();
    useEffect(() => {
        enterUnauthorizedRoute();
    }, [props.path]);
    return (React.createElement(BaseRoute, Object.assign({}, props)));
};
export default NoAuthRoute;
//# sourceMappingURL=NoAuthRoute.js.map