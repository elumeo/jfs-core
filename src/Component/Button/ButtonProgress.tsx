import React, { forwardRef, memo, useMemo } from 'react';
import { Button, ButtonProps, CircularProgress, PropTypes } from '@material-ui/core';
import { CSSProperties } from '@material-ui/core/styles/withStyles';

export const wrapperStyles: CSSProperties = { position: 'relative', display: 'inline-block' };

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

export type ButtonProgressProps = ButtonProps & {
  onClick?: ButtonProps['onClick'];
  disabled?: boolean;
  inProgress?: boolean;
  color?: PropTypes.Color;
};

const ButtonProgress = forwardRef<HTMLButtonElement, ButtonProgressProps>((props, ref) => {
    const { children, onClick, size = 'medium', color = 'inherit', disabled = false, inProgress = false, ...rest } = props;
    const progressStyles = useMemo<CSSProperties>(() => ({
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginTop: mapToCircularProgressSize(size) / 2 * -1,
      marginLeft: mapToCircularProgressSize(size) / 2 * -1
    }), [size]);

    return <div style={wrapperStyles}>
      <Button ref={ref} size={size} color={color} disabled={disabled || inProgress} onClick={onClick}{...rest}>{children}</Button>
      {inProgress && <CircularProgress size={mapToCircularProgressSize(size)} color={mapToCircularProgressColor(color)} style={progressStyles} />}
    </div>;
  }
);

export default memo(ButtonProgress);
