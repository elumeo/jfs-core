import React from 'react';
import * as MUI from '@material-ui/core';
import * as Button from './Button';

export type Props = {

}

const Toolbar: React.FC = () => (
  <MUI.CardActions>
    <Button.DismissAllNotifications/>
  </MUI.CardActions>
);

export default Toolbar;
