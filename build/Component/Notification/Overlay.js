import React from 'react';
import * as MUI from '@material-ui/core';
import * as History from './History';
const Overlay = () => (React.createElement(MUI.Card, { style: {
        width: 400,
        height: 'calc(100vh - 100px)'
    } },
    React.createElement(MUI.CardHeader, { style: { height: 70 }, action: React.createElement(History.Toolbar, null) }),
    React.createElement(MUI.CardContent, { style: {
            width: '100%',
            height: 'calc(100% - 70px)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        } },
        React.createElement(History.All, null))));
export default Overlay;
