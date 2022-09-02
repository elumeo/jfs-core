import React from 'react';
import { ReduxRouter, ReduxRouterProps } from '@lagunovsky/redux-react-router'
import { history } from 'Store/Middleware';

export type Props = Omit<ReduxRouterProps, 'history'>

const Router: React.FC<Props> = (props) => {
  return <ReduxRouter {...props} history={history} />
};

export default Router;
