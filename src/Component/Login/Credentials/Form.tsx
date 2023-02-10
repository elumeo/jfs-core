import React from 'react';
import definition from 'Component/App/Stateless/Style/Theme/Definition';
const style: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  boxSizing: 'border-box',
  height: 110,
  width: 240,
  marginTop: 6,
  marginBottom: 32,
  gap: definition.spacing(1),
};


const Form: React.FC<React.PropsWithChildren> = ({ children }) => (
  <form autoCorrect='false' autoComplete='off' style={style}>
    {children}
  </form>
);

export default Form;
