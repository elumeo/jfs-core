import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { history } from 'Store/Middleware';

export type Props = {
  children: React.ReactNode;
}

// @ts-ignore With react 18 it is required to specify children directly. Issue already created: https://github.com/supasate/connected-react-router/issues/565
const Router = ({ children }: Props) => <ConnectedRouter history={history}>{children}</ConnectedRouter>;

export default Router;
