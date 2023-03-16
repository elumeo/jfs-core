import React from 'react';
import {TableCell, TableFooter, TableRow} from '@mui/material';

const Footer = React.forwardRef<HTMLTableSectionElement, React.PropsWithChildren>(({children}, ref) => <TableFooter ref={ref}>
  <TableRow sx={{background: 'white'}}>
    <TableCell colSpan={100} align={'center'}>
      {children}
      {/*<CircularProgress size={20}/>*/}
    </TableCell>
  </TableRow>
</TableFooter>);
export default Footer;
