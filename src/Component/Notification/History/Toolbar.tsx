import React from 'react';
import CardActions from '@material-ui/core/CardActions';
import * as Button from './Button';

const Toolbar: React.FC = () => (
  <CardActions>
    <Button.DismissAllNotifications />
  </CardActions>
);

export default Toolbar;
