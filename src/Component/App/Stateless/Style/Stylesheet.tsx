import React from 'react';
import Helmet from 'react-helmet';

const Stylesheet: React.FC = () => (
  <Helmet>
    <link
      rel='stylesheet'
      href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'/>
    <link
      rel='stylesheet'
      href='https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined'/>
    <link
      rel='stylesheet'
      href='https://fonts.googleapis.com/css?family=Roboto'/>
  </Helmet>
);

export default Stylesheet;
