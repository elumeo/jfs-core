import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import useActions from 'Action/useActions';
import { useSelector } from 'Types/Redux';

export interface INavigationButtonProps {
  iconName: string;
}

const NavigationButton: React.FC<INavigationButtonProps> = ({ iconName }) => {
  const navigationOpen = useSelector<boolean>(
    state => state.Core.Navigation.navigationOpen
  );
  const { openNavigation, closeNavigation } = useActions();
  return (
    <IconButton
      onClick={() => (
      navigationOpen
        ? closeNavigation()
        : openNavigation()
    )}>
      <Icon fontSize="small">{iconName}</Icon>
    </IconButton>
  )
}

export default NavigationButton;
