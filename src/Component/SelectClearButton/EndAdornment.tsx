import React, {memo, ReactElement} from 'react';
import ClearButton, {Props as ClearButtonProps} from 'Component/SelectClearButton/ClearButton';
import {InputAdornment} from '@material-ui/core';

export type Props = {
  endAdornment: React.ReactNode;
  showClearButton: boolean;
  multiple?: boolean;
  clearButtonSize?: ClearButtonProps['size'];
  clearIconSize?: ClearButtonProps['iconSize'];
  onClickClearButton?: ClearButtonProps['onClick'];
  disabled?: boolean;
}

const EndAdornment = ({endAdornment, showClearButton, multiple = false, clearButtonSize = 'medium', clearIconSize = 'medium', disabled = false, onClickClearButton}: Props) => {
  return <InputAdornment position={'end'}>
    {endAdornment && (endAdornment as ReactElement).props.children}
    {showClearButton && <ClearButton
      multiple={multiple}
      size={clearButtonSize}
      iconSize={clearIconSize}
      disabled={disabled}
      onClick={onClickClearButton}
    />}
  </InputAdornment>
}

export default memo(EndAdornment);
