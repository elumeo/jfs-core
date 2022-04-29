import React from 'react';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useSelector } from 'Types/Redux';
import { closeNavigation, openNavigation } from 'Store/Action';
import { useDispatch } from 'react-redux';

const Button: React.FC = () => {
  const dispatch = useDispatch()
  const navigationOpen = useSelector<boolean>(
    state => state.Core.Navigation.navigationOpen,
  );
  const toggle = React.useCallback(
    () => dispatch(navigationOpen ? closeNavigation() : openNavigation()),
    [navigationOpen,dispatch],
  );
  return (
    <IconButton onClick={toggle}>
      <ArrowBackIcon fontSize='small' />
    </IconButton>
  );
};

export default Button;
