import React from 'react';

const style: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  boxSizing: 'border-box',
  height: 110,
  width: 240,
  marginTop: 6,
  marginBottom: 32,
};

const Form: React.FC = ({ children }) => (
  <form autoCorrect='false' autoComplete='off' style={style}>
    {children}
  </form>
);

export default Form;
