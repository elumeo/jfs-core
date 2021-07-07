import * as React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import Content from '@elumeo/jfs-core/build/Component/Content/Content';
import AuthRoute from '@elumeo/jfs-core/build/Component/Route/AuthRoute';
import NoAuthRoute from '@elumeo/jfs-core/build/Component/Route/NoAuthRoute';
import Lists from 'Component/Lists';
import Typographies from 'Component/Typographies';
import Icons from 'Component/Icons';
import Directory from 'Component/Directory';
import ExternalLinks from 'Component/ExternalLinks';
import Cards from 'Component/Cards';
import Colors from 'Component/Colors';
import Buttons from 'Component/Buttons';
import Tables from 'Component/Tables';
import Dialogs from 'Component/Dialogs';
import Notifications from 'Component/Notifications';

const Routes: React.FC = () => (
  <Content>
    <Switch>
      <AuthRoute key='start' exact path='/start' component={Directory}/>
      <AuthRoute key='Styling' exact path='/Lists' component={Lists}/>
      <AuthRoute key='Buttons' exact path='/Buttons' component={Buttons}/>
      <AuthRoute key='Typographies' exact path='/Typographies' component={Typographies}/>
      <AuthRoute key='Icons' exact path='/Icons' component={Icons}/>
      <AuthRoute key='Color' exact path='/Colors' component={Colors}/>
      <AuthRoute key='ExternalLinks' exact path='/ExternalLinks' component={ExternalLinks}/>
      <AuthRoute key='Cards' exact path='/Cards' component={Cards}/>
      <AuthRoute key='Tables' exact path='/Tables' component={Tables}/>
      <AuthRoute key='Dialogs' exact path='/Dialogs' component={Dialogs}/>
      <AuthRoute key='Notifications' exact path='/Notifications' component={Notifications}/>
      <NoAuthRoute key='default' exact path='/' component={() => <Redirect to={{pathname: '/start'}}/>}/>
    </Switch>
  </Content>
);

export default Routes;
