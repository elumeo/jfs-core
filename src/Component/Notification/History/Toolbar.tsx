import React from 'react';
import CardActions from '@material-ui/core/CardActions';
import DeleteAllButton from './DeleteAllButton';

const Toolbar: React.FC = () => (
  <CardActions>
    <DeleteAllButton/>
  </CardActions>
);

export default Toolbar;
