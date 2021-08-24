import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import * as History from './History';
const Overlay = () => (React.createElement(Card, { style: {
        width: 400,
        height: 'calc(100vh - 100px)',
    } },
    React.createElement(CardHeader, { style: { height: 70 }, action: React.createElement(History.Toolbar, null) }),
    React.createElement(CardContent, { style: {
            width: '100%',
            height: 'calc(100% - 70px)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        } },
        React.createElement(History.All, null))));
export default Overlay;
