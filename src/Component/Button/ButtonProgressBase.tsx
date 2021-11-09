import React, { forwardRef, memo } from 'react';
import { Button, ButtonProps, CircularProgress, PropTypes } from '@material-ui/core';

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

export const mapToCircularProgressColor = (color: PropTypes.Color,): 'inherit' | 'primary' | 'secondary' => color === 'default' ? 'inherit' : color;

export type ButtonProgressBaseProps = ButtonProps & {
  onClick?: ButtonProps['onClick'];
  disabled?: boolean;
  inProgress?: boolean;
  color?: PropTypes.Color;
  className?: string;
};

const ButtonProgressBase = forwardRef<HTMLButtonElement, ButtonProgressBaseProps>(
  (props: ButtonProgressBaseProps, ref) => {
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
        <Button
          ref={ref}
          size={size}
          color={color}
          disabled={disabled || inProgress}
          onClick={onClick}
          {...rest}>
          {children}
        </Button>
        {inProgress && (
          <CircularProgress
            size={mapToCircularProgressSize(size)}
            color={mapToCircularProgressColor(color)}
            className={`button-progress__progress`}
          />
        )}
      </div>
    );
  }
);

export default memo(ButtonProgressBase);
