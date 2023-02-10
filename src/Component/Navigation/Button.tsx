import React from 'react';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useSelector } from 'Types/Redux';
import { useDispatch } from 'react-redux';
import { closeNavigation, openNavigation } from 'Store/Action';

const Button: React.FC = () => {
  const navigationOpen = useSelector<boolean>(
    state => state.Core.Navigation.navigationOpen,
  );
  const dispatch = useDispatch();
  const toggle = React.useCallback(
    () => dispatch(navigationOpen ? closeNavigation() : openNavigation()),
    [navigationOpen],
  );
  return (
    <IconButton onClick={toggle}>
      <ArrowBackIcon fontSize='small' />
    </IconButton>
  );
};

export default Button;
