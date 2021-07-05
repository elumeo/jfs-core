import React from 'react';
import Wrapper from '../Wrapper';
const Test = props => (React.createElement(Wrapper, Object.assign({}, props, { titleAccess: 'test' }),
    React.createElement("title", null, "test"),
    React.createElement("g", { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
        React.createElement("circle", { fill: 'currentcolor', cx: '16.5', cy: '15.5', r: '10.5' }))));
export default Test;
