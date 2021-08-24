import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import useActions from 'Store/useActions';
import { useSelector } from 'Types/Redux';

const Button: React.FC = () => {
  const navigationOpen = useSelector<boolean>(
    state => state.Core.Navigation.navigationOpen,
  );
  const { openNavigation, closeNavigation } = useActions();
  const toggle = React.useCallback(
    () => (navigationOpen ? closeNavigation() : openNavigation()),
    [navigationOpen],
  );
  return (
    <IconButton onClick={toggle}>
      <ArrowBackIcon fontSize='small' />
    </IconButton>
  );
};

export default Button;
