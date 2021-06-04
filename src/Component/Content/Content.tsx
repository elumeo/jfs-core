import Box from '@material-ui/core/Box';
import React from 'react';

const Content: React.FC = ({ children }) => (
  <Box style={{ width: '100%' }}>
    {children}
  </Box>
);

export default Content;
