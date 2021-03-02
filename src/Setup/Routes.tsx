import React, { useState, useEffect, useMemo} from 'react';
import Content from 'Component/Content/Content';
import AuthRoute from 'Component/Route/AuthRoute';
import NoAuthRoute from 'Component/Route/NoAuthRoute';
import  {Switch , Redirect} from 'react-router-dom'
type TRoutesProps = {
}
const Routes = ({
}: TRoutesProps) => {
  return (
     
    <Content>
    <Switch>
      <AuthRoute
          key={'start'}
          exact path={`/start`}
          component={() =><div> hello</div> }/>
      <NoAuthRoute
          key={'default'}
          exact path={'/'}
          component={() => <Redirect to={ { pathname: '/start' } }/>}/>
      </Switch>
  </Content>
  );
};
export default Routes;