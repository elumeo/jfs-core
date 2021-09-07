import React from 'react';
import Helmet from 'react-helmet';
const Stylesheet = () => (React.createElement(Helmet, null,
    React.createElement("link", { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap' }),
    React.createElement("link", { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined' }),
    React.createElement("link", { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' })));
export default Stylesheet;
