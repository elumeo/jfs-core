import React, { FC, ReactNode } from 'react';
import { Navigate, Route } from 'react-router-dom';
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
import WebSocket from './Component/WebSocket.showcase';
import Boxes from './Component/Boxes.showcase';
import TabsDemo from './Component/Tabs.showcase';
import Forms from './Component/Forms.showcase';
import AppCardContentExample from './Component/AppCardContentExample.showcase';
import RouterProvider from '../Component/App/Stateful/RouterProvider';
import NoAuthRoute from '../Component/Route/NoAuthRoute';
import ClippyConfetti from './Component/ClippyConfetti.showcase';

type Props = {
  header: ReactNode;
  overlays: ReactNode;
}

const Routes: FC<Props> = ({ header, overlays }) => (
  <RouterProvider
    routes={
      <>
        <Route path={'*'}
          element={
            <>
              {header}
              <AuthRoute title={'Showcase'} />
              {overlays}
            </>
          }>
          <Route
            path={'Start'}
            element={<Dashboard />}
          />
          <Route path={'Lists'} element={<Lists />} />
          <Route path={'Buttons'} element={<Buttons />} />
          <Route path={'Typographies'} element={<Typographies />} />
          <Route path={'Icons'} element={<Icons />} />
          <Route path={'Colors'} element={<Colors />} />
          <Route path={'ExternalLinks'} element={<ExternalLinks />} />
          <Route path={'Cards'} element={<Cards />} />
          <Route path={'Tables'} element={<Tables />} />
          <Route path={'Dialogs'} element={<Dialogs />} />
          <Route path={'Notifications'} element={<Notifications />} />
          <Route path={'Boxes'} element={<Boxes />} />
          <Route path={'Tabs'} element={<TabsDemo />} />
          <Route path={'Forms'} element={<Forms />} />
          <Route path={'WebSocket'} element={<WebSocket />} />
          <Route path={'AppCardContentExample'} element={<AppCardContentExample />} />
          <Route path={'SharedComponent'} element={<AppCardContentExample />} />
          <Route path={'ClippyConfetti'} element={<ClippyConfetti />} />
          <Route path={'*'} element={<Navigate to={'Start'} replace />} />
        </Route>
        <Route path={'*'}
          element={
            <>
              {header}
              <NoAuthRoute title={'Showcase'} />
              {overlays}
            </>
          }>
          <Route path={'NoAuthRoute'} element={<>No Auth Route</>} />
        </Route>
      </>
    } />
);

export default Routes;
