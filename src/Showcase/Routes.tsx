import * as React from 'react';
import { Routes as RRoutes, Route, Navigate } from 'react-router-dom';

import AuthRoute from '../Component/Route/AuthRoute';
import Lists from './Component/Lists.showcase';
import Typographies from './Component/Typographies.showcase';
import Icons from './Component/Icons.showcase';
import Dashboard from './Component/Dashboard.showcase';
import ExternalLinks from './Component/ExternalLinks.showcase';
import Cards from './Component/Cards.showcase';
import Colors from './Component/Colors.showcase';
import Buttons from './Component/Buttons.showcase';
import Tables from './Component/Tables.showcase';
import Dialogs from './Component/Dialogs.showcase';
import Notifications from './Component/Notifications.showcase';
import Boxes from './Component/Boxes.showcase';
import TabsDemo from './Component/Tabs.showcase';
import Forms from './Component/Forms.showcase';
import AppCardContentExample from './Component/AppCardContentExample.showcase';

const Routes: React.FC = () => (
  <RRoutes>
    <Route key={'start'} path='/start' element={<AuthRoute title='app.title' translateTitle subtitle='start' />}>
      <Route index element={<Dashboard />} />
    </Route>
    <Route key={'Styling'} path='/lists' element={<AuthRoute title='app.title' translateTitle subtitle='Lists' />}>
      <Route index element={<Lists />} />
    </Route>
    <Route key={'Buttons'} path='/Buttons' element={<AuthRoute title='app.title' translateTitle subtitle='Buttons' />}>
      <Route index element={<Buttons />} />
    </Route>
    <Route key={'Typographies'} path='/Typographies' element={<AuthRoute title='app.title' translateTitle subtitle='Typographies' />}>
      <Route index element={<Typographies />} />
    </Route>
    <Route key={'Icons'} path='/Icons' element={<AuthRoute title='app.title' translateTitle subtitle='Icons' />}>
      <Route index element={<Icons />} />
    </Route>
    <Route key={'Color'} path='/Colors' element={<AuthRoute title='app.title' translateTitle subtitle='Colors' />}>
      <Route index element={<Colors />} />
    </Route>
    <Route key={'ExternalLinks'} path='/ExternalLinks' element={<AuthRoute title='app.title' translateTitle subtitle='ExternalLinks' />}>
      <Route index element={<ExternalLinks />} />
    </Route>
    <Route key={'Cards'} path='/Cards' element={<AuthRoute title='app.title' translateTitle subtitle='Cards' />}>
      <Route index element={<Cards />} />
    </Route>
    <Route key={'Tables'} path='/Tables' element={<AuthRoute title='app.title' translateTitle subtitle='Tables' />}>
      <Route index element={<Tables />} />
    </Route>
    <Route key={'Dialogs'} path='/Dialogs' element={<AuthRoute title='app.title' translateTitle subtitle='Dialogs' />}>
      <Route index element={<Dialogs />} />
    </Route>
    <Route key={'Notifications'} path='/Notifications' element={<AuthRoute title='app.title' translateTitle subtitle='Notifications' />}>
      <Route index element={<Notifications />} />
    </Route>
    <Route key={'Boxes'} path='/Boxes' element={<AuthRoute title='app.title' translateTitle subtitle='Boxes' />}>
      <Route index element={<Boxes />} />
    </Route>
    <Route key={'Tabs'} path='/Tabs' element={<AuthRoute title='app.title' translateTitle subtitle='Tabs' />}>
      <Route index element={<TabsDemo />} />
    </Route>
    <Route key={'Forms'} path='/Forms' element={<AuthRoute title='app.title' translateTitle subtitle='Forms' />}>
      <Route index element={<Forms />} />
    </Route>
    <Route key={'AppCardContentExample'} path='/AppCardContentExample' element={<AuthRoute title='app.title' translateTitle subtitle='AppCardContentExample' />}>
      <Route index element={<AppCardContentExample />} />
    </Route>
    <Route path='*' element={<AuthRoute />}>
      <Route
        path='*'
        element={<Navigate to={'/start'} replace />}
      />
    </Route>

  </RRoutes>
);

export default Routes;
