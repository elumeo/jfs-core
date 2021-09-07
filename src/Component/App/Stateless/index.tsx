import React from 'react';
import Style from './Style';
import Picker from './Picker';

const Stateless: React.FC = ({ children }) => (
  <Style>
    <Picker>
      {children}
    </Picker>
  </Style>
);

export default Stateless;