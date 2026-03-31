import React, { forwardRef } from 'react';
import { Box, Button, ButtonProps, CircularProgress, CircularProgressProps, PropTypes, SxProps } from '@mui/material';


export const wrapperStyles: SxProps = {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

export const mapToCircularProgressSize = (size: string): number => {
  switch (size) {
    case 'large':
      return 28;
    case 'small':
      return 20;
    default:
      return 24;
  }
};

export const SpinnerContainerSX: SxProps = ({
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})
export type ButtonProgressProps = ButtonProps & {
  onClick?: ButtonProps['onClick'];
  disabled?: boolean;
  inProgress?: boolean;
  color?: PropTypes.Color;
  spinnerColor?: CircularProgressProps['color'];
};

const ButtonProgress = forwardRef<HTMLButtonElement, ButtonProgressProps>((
  {
    children,
    onClick,
    size = 'medium',
    color = 'inherit',
    disabled = false,
    inProgress = false,
    spinnerColor = undefined,
    ...rest
  }, ref) => (
  <Button
    ref={ref}
    size={size}
    color={color}
    disabled={disabled || inProgress}
    onClick={onClick}
    {...rest}
  >
    {children}
    {inProgress && (
      <Box sx={SpinnerContainerSX}>
        <CircularProgress size={mapToCircularProgressSize(size)} color={spinnerColor || color}/>
      </Box>
    ) || null}
  </Button>
));

export default ButtonProgress
