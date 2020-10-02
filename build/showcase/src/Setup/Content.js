import * as React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import Content from '@elumeo/jfs-core/build/Component/Content/Content';
import AuthRoute from '@elumeo/jfs-core/build/Component/Route/AuthRoute';
import NoAuthRoute from '@elumeo/jfs-core/build/Component/Route/NoAuthRoute';
import Settings from '@elumeo/jfs-core/build/Component/Settings/SettingsContainer';
import Boilerplate from '../../../Component/Boilerplate';
export default () => (React.createElement(Content, null,
    React.createElement(Switch, null,
        React.createElement(AuthRoute, { key: 'start', exact: true, path: `/start`, component: Boilerplate }),
        React.createElement(NoAuthRoute, { key: 'settings', translationId: 'app.settings', exact: true, path: `/settings`, component: Settings }),
        React.createElement(NoAuthRoute, { key: 'default', exact: true, path: '/', component: () => React.createElement(Redirect, { to: { pathname: '/start' } }) }))));
//# sourceMappingURL=Content.js.map