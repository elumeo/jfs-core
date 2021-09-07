import React from 'react';
import Style from './Style';
import Picker from './Picker';
const Stateless = ({ children }) => (React.createElement(Style, null,
    React.createElement(Picker, null, children)));
export default Stateless;
