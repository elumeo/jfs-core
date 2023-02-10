import React, { forwardRef } from 'react';
import { Box, ButtonProps, CircularProgress, IconButton, IconButtonProps, PropTypes, SxProps } from '@mui/material';
import { mapToCircularProgressColor, mapToCircularProgressSize, wrapperStyles } from 'Component/Button/ButtonProgress';


export type IconButtonProgressProps = IconButtonProps & {
  onClick?: ButtonProps['onClick'];
  disabled?: boolean;
  inProgress?: boolean;
  color?: PropTypes.Color;
};
const getSpinnerSx = (size = 'medium'): SxProps => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  marginTop: mapToCircularProgressSize(size) / 2 * -1,
  marginLeft: mapToCircularProgressSize(size) / 2 * -1
})

const IconButtonProgress = forwardRef<HTMLButtonElement, IconButtonProgressProps>((
  {
    children,
    onClick,
    size = 'medium',
    color = 'inherit',
    disabled = false,
    inProgress = false,
    ...rest
  }, ref) => {
  return <Box sx={wrapperStyles}>
    <IconButton ref={ref} size={size} color={color} disabled={disabled || inProgress} onClick={onClick}{...rest}>{children}</IconButton>
    {inProgress && <CircularProgress size={mapToCircularProgressSize(size)} color={mapToCircularProgressColor(color)} sx={getSpinnerSx(size)} />}
  </Box>;
}
);

export default IconButtonProgress
