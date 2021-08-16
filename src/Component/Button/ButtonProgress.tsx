import React, { forwardRef, memo } from 'react';
import { Box, Button, ButtonProps, CircularProgress, PropTypes } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { IconButtonProgress } from 'Component/Button/IconButtonProgress';

export const progressStyles = makeStyles<Theme, ButtonProgressProps | IconButtonProgress>(() => createStyles({
  progressWrapper: {
    position: 'relative',
    display: 'inline-block',
  },
  progress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: (props) => mapToCircularProgressSize(props.size) / 2 * -1,
    marginLeft: (props) => mapToCircularProgressSize(props.size) / 2 * -1
  }
}));

export type ButtonProgressProps = ButtonProps & {
  onClick?: () => void;
  disabled?: boolean;
  inProgress?: boolean;
  color?: PropTypes.Color;
}

export const mapToCircularProgressSize = (size: string) => {
  switch (size) {
    case 'large':
      return 28;
    case 'small':
      return 20;
    default:
      return 24;
  }
};

export const mapToCircularProgressColor = (color: PropTypes.Color) => color === 'default' ? 'inherit' : color;

const ButtonProgress = forwardRef<HTMLButtonElement, ButtonProgressProps>((props: ButtonProgressProps, ref) => {
  const { children, onClick, size = 'medium', color = 'inherit', disabled = false, inProgress = false, ...rest } = props;
  const progressClasses = progressStyles(props);

  return <Box className={progressClasses.progressWrapper}>
    <Button
      ref={ref}
      size={size}
      color={color}
      disabled={disabled || inProgress}
      onClick={onClick}
      {...rest}
    >{children}</Button>
    {inProgress && <CircularProgress size={mapToCircularProgressSize(size)} color={mapToCircularProgressColor(color)} className={progressClasses.progress} />}
  </Box>;
});

export default memo(ButtonProgress);
