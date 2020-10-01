import React from 'react';
import Button from 'react-md/lib/Buttons/Button';
import useActions from 'Action/useActions';

const HideNotificationDrawerButton: React.FC = () => {
  const { hideNotificationDrawerAction } = useActions();
  return (
    <Button icon onClick={() => hideNotificationDrawerAction()}>
      arrow_forward
    </Button>
  );
}

export default HideNotificationDrawerButton;
