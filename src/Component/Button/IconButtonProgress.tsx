import React, { forwardRef } from 'react';
import {
  Box,
  ButtonProps,
  CircularProgress,
  CircularProgressProps,
  IconButton,
  IconButtonProps,
  PropTypes
} from '@mui/material';
import { mapToCircularProgressSize, SpinnerContainerSX, wrapperStyles } from 'Component/Button/ButtonProgress';

export const mapToCircularProgressColor =
  (color: PropTypes.Color): 'inherit' | 'primary' | 'secondary' =>
    color === 'default' ? 'inherit' : color;

export type IconButtonProgressProps = IconButtonProps & {
  onClick?: ButtonProps['onClick'];
  disabled?: boolean;
  inProgress?: boolean;
  color?: PropTypes.Color;
  spinnerColor?: CircularProgressProps['color'];
};

const IconButtonProgress = forwardRef<HTMLButtonElement, IconButtonProgressProps>((
  {
    children,
    onClick,
    size = 'medium',
    color = 'inherit',
    disabled = false,
    inProgress = false,
    spinnerColor = undefined,
    ...rest
  }, ref) =>
  <Box sx={wrapperStyles}>
    <IconButton
      ref={ref}
      size={size}
      color={color}
      disabled={disabled || inProgress}
      onClick={onClick}
      {...rest}>{children}
    </IconButton>
    {inProgress && (
      <Box sx={SpinnerContainerSX}>
        <CircularProgress size={mapToCircularProgressSize(size)}
                          color={spinnerColor || mapToCircularProgressColor(color)}/>
      </Box>
    ) || null}
  </Box>
)

export default IconButtonProgress
