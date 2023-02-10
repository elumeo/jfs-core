import * as React from 'react';
import { Routes as RRoutes, Route, Navigate } from 'react-router-dom';

import AuthRoute from '@elumeo/jfs-core/build/Component/Route/AuthRoute';
import NoAuthRoute from '@elumeo/jfs-core/build/Component/Route/NoAuthRoute';
import Lists from 'Component/Lists';
import Typographies from 'Component/Typographies';
import Icons from 'Component/Icons';
import Dashboard from 'Component/Dashboard';
import ExternalLinks from 'Component/ExternalLinks';
import Cards from 'Component/Cards';
import Colors from 'Component/Colors';
import Buttons from 'Component/Buttons';
import Tables from 'Component/Tables';
import Dialogs from 'Component/Dialogs';
import Notifications from 'Component/Notifications';
import Boxes from 'Component/Boxes';
import TabsDemo from 'Component/Tabs';
import Forms from 'Component/Forms';
import AppCardContentExample from 'Component/AppCardContentExample';
import SharedComponent from 'Component/SharedComponent';

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
      <Route key={'SharedComponent'} path='/SharedComponent' element={<AuthRoute title='app.title' translateTitle subtitle='SharedComponent' />}>
        <Route index element={<SharedComponent />} />
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



      {/* <AuthRoute key='start' exact path='/start' component={Dashboard} /> */}
      {/* <AuthRoute key='Styling' exact path='/Lists' component={Lists} /> */}
      {/* <AuthRoute key='Buttons' exact path='/Buttons' component={Buttons} /> */}
      {/* <AuthRoute key='Typographies' exact path='/Typographies' component={Typographies} /> */}
      {/* <AuthRoute key='Icons' exact path='/Icons' component={Icons} /> */}
      {/* <AuthRoute key='Color' exact path='/Colors' component={Colors} /> */}
      {/* <AuthRoute key='ExternalLinks' exact path='/ExternalLinks' component={ExternalLinks} /> */}
      {/* <AuthRoute key='Cards' exact path='/Cards' component={Cards} />
      <AuthRoute key='Tables' exact path='/Tables' component={Tables} />
      <AuthRoute key='Dialogs' exact path='/Dialogs' component={Dialogs} />
      <AuthRoute key='Notifications' exact path='/Notifications' component={Notifications} />
      <AuthRoute key='Boxes' exact path='/Boxes' component={Boxes} />
      <AuthRoute key='Tabs' exact path='/Tabs' component={TabsDemo} />
      <AuthRoute key='Forms' exact path='/Forms' component={Forms} />
      <AuthRoute key='SharedComponent' exact path='/SharedComponent' component={SharedComponent} />
      <AuthRoute key='AppCardContent' exact path='/AppCardContent' component={AppCardContentExample} />
      <NoAuthRoute key='default' exact path='/' component={() => <Navigate to={{ pathname: '/start' }} />} /> */}
    </RRoutes>
);

export default Routes;
