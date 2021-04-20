import React from 'react';
import CardActions from '@material-ui/core/CardActions';
import * as Button from './Button';

export type Props = {

}

const Toolbar: React.FC = () => (
  <CardActions>
    <Button.DismissAllNotifications/>
  </CardActions>
);

export default Toolbar;
