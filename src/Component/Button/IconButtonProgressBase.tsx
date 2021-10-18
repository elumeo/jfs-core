import React, { forwardRef, memo } from 'react';
import { CircularProgress, IconButton, IconButtonProps, PropTypes } from '@material-ui/core';
import { mapToCircularProgressColor, mapToCircularProgressSize } from 'Component/Button/ButtonProgressBase';

export type IconButtonProgressBaseProps = IconButtonProps & {
  onClick?: () => void;
  disabled?: boolean;
  inProgress?: boolean;
  color?: PropTypes.Color;
  className?: string;
};

const IconButtonProgressBase = forwardRef<HTMLButtonElement, IconButtonProgressBaseProps>(
  (props: IconButtonProgressBaseProps, ref) => {
    const {
      children,
      onClick,
      size = 'medium',
      color = 'inherit',
      disabled = false,
      inProgress = false,
      className = '',
      ...rest
    } = props;

    return (
      <div className={`button-progress__wrapper ${className}`}>
        <IconButton
          ref={ref}
          size={size}
          color={color}
          disabled={disabled || inProgress}
          onClick={onClick}
          {...rest}>
          {children}
        </IconButton>
        {inProgress && (
          <CircularProgress
            size={mapToCircularProgressSize(size)}
            color={mapToCircularProgressColor(color)}
            className={'button-progress__progress'}
          />
        )}
      </div>
    );
  },
);

export default memo(IconButtonProgressBase);
