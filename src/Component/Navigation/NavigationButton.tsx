import React from 'react';
import Button from 'react-md/lib/Buttons/Button';
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
    <Button icon onClick={() => (
      navigationOpen
        ? closeNavigation()
        : openNavigation()
    )}>
      {iconName}
    </Button>
  )
}

export default NavigationButton;
