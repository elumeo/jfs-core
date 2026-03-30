import React, { forwardRef } from 'react';
import { Box, ButtonProps, CircularProgress, IconButton, IconButtonProps, PropTypes, SxProps } from '@mui/material';
import { mapToCircularProgressColor, mapToCircularProgressSize, wrapperStyles } from 'Component/Button/ButtonProgress';


export type IconButtonProgressProps = IconButtonProps & {
  onClick?: ButtonProps['onClick'];
  disabled?: boolean;
  inProgress?: boolean;
  color?: PropTypes.Color;
};
const SpinnerContainerSX: SxProps = ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height: '100%',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
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
    return (
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
            <CircularProgress size={mapToCircularProgressSize(size)} color={mapToCircularProgressColor(color)}/>
          </Box>
        ) || null}
      </Box>
    )
  }
);

export default IconButtonProgress
