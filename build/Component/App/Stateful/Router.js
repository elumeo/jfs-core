import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../../../Store/Middleware';
const Router = ({ children }) => (React.createElement(ConnectedRouter, { history: history }, children));
export default Router;
