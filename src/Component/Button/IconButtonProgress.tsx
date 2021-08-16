import React, { forwardRef, memo } from 'react';
import { Box, CircularProgress, IconButton, IconButtonProps, PropTypes } from '@material-ui/core';
import { mapToCircularProgressColor, mapToCircularProgressSize, progressStyles } from 'Component/Button/ButtonProgress';

export type IconButtonProgress = IconButtonProps & {
  onClick?: () => void;
  disabled?: boolean;
  inProgress?: boolean;
  color?: PropTypes.Color;
}

const IconButtonProgress = forwardRef<HTMLButtonElement, IconButtonProgress>((props: IconButtonProgress, ref) => {
  const { children, onClick, size = 'medium', color = 'inherit', disabled = false, inProgress = false, ...rest } = props;
  const progressClasses = progressStyles(props);

  return <Box className={progressClasses.progressWrapper}>
    <IconButton
      ref={ref}
      size={size}
      color={color}
      disabled={disabled || inProgress}
      onClick={onClick}
      {...rest}
    >{children}</IconButton>
    {inProgress && <CircularProgress size={mapToCircularProgressSize(size)} color={mapToCircularProgressColor(color)} className={progressClasses.progress}/>}
  </Box>;
});

export default memo(IconButtonProgress);
