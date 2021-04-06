import React from 'react';
import * as MUI from '@material-ui/core';
import useActions from 'Store/useActions';
import { useSelector } from 'Types/Redux';

export type Props = {
  iconName: string;
};

const Button: React.FC<Props> = ({ iconName }) => {
  const navigationOpen = useSelector<boolean>(
    state => state.Core.Navigation.navigationOpen
  );
  const { openNavigation, closeNavigation } = useActions();
  return (
    <MUI.IconButton
      onClick={() => (
      navigationOpen
        ? closeNavigation()
        : openNavigation()
    )}>
      <MUI.Icon fontSize="small">
        {iconName}
      </MUI.Icon>
    </MUI.IconButton>
  )
}

export default Button;
