import React from 'react';
import { Box, CircularProgress, TableCell, TableFooter, TableRow } from '@mui/material';

const Footer = React.forwardRef<HTMLTableSectionElement, React.PropsWithChildren<{ isLoading: boolean }>>(({ children, isLoading }, ref) =>
  (isLoading || children)
    ? isLoading
      ? (
        <caption ref={ref}>
          < Box textAlign={'center'} >
            <CircularProgress size={20} color='secondary' />
          </Box>
        </caption>
      )
      : children
        ? (
          <TableFooter ref={ref}>
            <TableRow sx={{ background: 'white' }}>
              <TableCell colSpan={100} align={'center'}>
                {children}
              </TableCell>
            </TableRow>
          </TableFooter>
        )
        : null
    : null
);
export default Footer;
