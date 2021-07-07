import React from 'react';
import Helmet from 'react-helmet';
const HtmlHead = ({ title }) => (React.createElement(Helmet, null,
    React.createElement("link", { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap' }),
    React.createElement("link", { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined' }),
    React.createElement("link", { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }),
    React.createElement("title", null, title)));
export default HtmlHead;