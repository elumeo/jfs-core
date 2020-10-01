import React from 'react';
import Toolbar from 'react-md/lib/Toolbars';
import NavigationButton from './NavigationButton';
import { useSelector } from 'Types/Redux';

const NavigationDrawerHeader: React.FC = () => {
  const username = useSelector<string>(state => (
    state.Core.Session.sessionDTO &&
    state.Core.Session.sessionDTO.username
  ));
  return (
    <Toolbar
      actions={<NavigationButton iconName="arrow_back"/>}
      className="md-divider-border md-divider-border--bottom"
      title={username ? username : ''}/>
  );
}

export default NavigationDrawerHeader;
