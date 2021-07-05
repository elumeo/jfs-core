import React from 'react';
const style = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
    height: 110,
    width: 240,
    marginTop: 6,
    marginBottom: 32
};
const Form = ({ children }) => (React.createElement("form", { autoCorrect: 'false', autoComplete: 'off', style: style }, children));
export default Form;
