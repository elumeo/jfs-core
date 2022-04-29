import React from 'react';
import CardActions from '@mui/material/CardActions';
import DeleteAllButton from './DeleteAllButton';

const Toolbar: React.FC = () => (
  <CardActions>
    <DeleteAllButton/>
  </CardActions>
);

export default Toolbar;
