import React from 'react';
import Helmet from 'react-helmet';
const Title = ({ value }) => (React.createElement(Helmet, null,
    React.createElement("title", null, value)));
export default Title;
