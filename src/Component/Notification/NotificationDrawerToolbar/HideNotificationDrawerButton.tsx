import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon'
import useActions from 'Action/useActions';

const HideNotificationDrawerButton: React.FC = () => {
  const { hideNotificationDrawerAction } = useActions();
  return (
    <IconButton onClick={() => hideNotificationDrawerAction()}>
     <Icon>arrow_forward</Icon> 
    </IconButton>
  );
}

export default HideNotificationDrawerButton;
