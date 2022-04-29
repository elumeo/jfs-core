import React from 'react';
import ConnectedRouter from './ConnectedRouter';
// import { useSelector } from 'Types/Redux';
import { history } from 'Store/Middleware';
import { useSelector } from 'Types/Redux';

export type Props = {
  children?: React.ReactNode;
}

// @ts-ignore With react 18 it is required to specify children directly. Issue already created: https://github.com/supasate/connected-react-router/issues/565
const Router: React.FC<Props> = (props) => {
  const _history = useSelector(state => state.router)
  console.log('state', { _history, history })
  return <ConnectedRouter history={history} location={history.location} {...props} />
};

export default Router;
