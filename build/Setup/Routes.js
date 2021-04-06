import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import Content from '../Component/Content/Content';
import AuthRoute from '../Component/Route/AuthRoute';
import NoAuthRoute from '../Component/Route/NoAuthRoute';
const Routes = () => (React.createElement(Content, null,
    React.createElement(Switch, null,
        React.createElement(AuthRoute, { key: 'start', exact: true, path: '/start', component: () => React.createElement("div", null, "hello") }),
        React.createElement(NoAuthRoute, { key: 'default', exact: true, path: '/', component: () => React.createElement(Redirect, { to: { pathname: '/start' } }) }))));
export default Routes;
//# sourceMappingURL=Routes.js.map