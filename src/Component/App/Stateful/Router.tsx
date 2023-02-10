import React from 'react';
import { HashRouter, HashRouterProps } from 'react-router-dom';



const Router: React.FC<React.PropsWithChildren<HashRouterProps>> = ({ children, ...rest }) => <HashRouter {...rest}>{children}</HashRouter>;

export default Router;
