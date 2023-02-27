import React, { forwardRef } from 'react';
import { Box, Button, ButtonProps, CircularProgress, CircularProgressProps, PropTypes, SxProps } from '@mui/material';


export const wrapperStyles: SxProps = {
  position: 'relative',
  display: 'inline-block'
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

export const mapToCircularProgressColor = (color: PropTypes.Color): 'inherit' | 'primary' | 'secondary' => color === 'default' ? 'inherit' : color;
const getSpinnerSx = (size = 'medium'): SxProps => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  marginTop: mapToCircularProgressSize(size) / 2 * -1 + 'px',
  marginLeft: mapToCircularProgressSize(size) / 2 * -1 + 'px',
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
  },
  ref) => {
  return <Box
    sx={wrapperStyles}
  >
    <Button
      ref={ref}
      size={size}
      color={color}
      disabled={disabled || inProgress}
      onClick={onClick}{...rest}>
      {
        children
      }
    </Button>
    {inProgress
      ? <CircularProgress size={mapToCircularProgressSize(size)} color={spinnerColor || color}
        sx={getSpinnerSx(size)} />
      : <></>}

  </Box>;
}
);

export default ButtonProgress
