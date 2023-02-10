import React from 'react';
import * as Icon from 'Component/Icon';
import { Box } from '@mui/material';
export type Country = 'de' | 'uk' | 'it';
export type Props = {
  country: Country;
};

const Flag: React.FC<Props> = React.forwardRef<HTMLDivElement, Props>(
  ({ country }, ref) => {
    const CountryIcon = Icon.Flag[
      country.toUpperCase() as Uppercase<Country>
    ] as React.FC;
    return (
      <Box
        ref={ref}
        sx={{
          width: 28,
          height: 28,
          position: 'relative',
        }}>
        {CountryIcon && <CountryIcon />}
      </Box>
    );
  },
);

export default Flag;
