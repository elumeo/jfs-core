import React, { forwardRef, memo, useMemo } from 'react';
import { ButtonProps, CircularProgress, IconButton, IconButtonProps, PropTypes } from '@material-ui/core';
import { mapToCircularProgressColor, mapToCircularProgressSize, wrapperStyles } from 'Component/Button/ButtonProgress';
import { CSSProperties } from '@material-ui/core/styles/withStyles';

export type IconButtonProgressProps = IconButtonProps & {
  onClick?: ButtonProps['onClick'];
  disabled?: boolean;
  inProgress?: boolean;
  color?: PropTypes.Color;
};

const IconButtonProgress = forwardRef<HTMLButtonElement, IconButtonProgressProps>((props, ref) => {
    const { children, onClick, size = 'medium', color = 'inherit', disabled = false, inProgress = false, ...rest } = props;

    const progressStyles = useMemo<CSSProperties>(() => ({
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginTop: mapToCircularProgressSize(size) / 2 * -1,
      marginLeft: mapToCircularProgressSize(size) / 2 * -1
    }), [size]);

    return <div style={wrapperStyles}>
      <IconButton ref={ref} size={size} color={color} disabled={disabled || inProgress} onClick={onClick}{...rest}>{children}</IconButton>
      {inProgress && <CircularProgress size={mapToCircularProgressSize(size)} color={mapToCircularProgressColor(color)} style={progressStyles} />}
    </div>;
  }
);

export default memo(IconButtonProgress);
