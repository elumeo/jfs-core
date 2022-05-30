import React, {CSSProperties, memo, useCallback, useMemo} from 'react';
import CloseIcon from "@material-ui/icons/Close";
import {IconButton, IconProps} from "@material-ui/core";
import {IconButtonProps} from "@material-ui/core/IconButton";

const styles: CSSProperties = {marginRight: '21px'};

export type Props = {
  onClick: (value: string | string[]) => void;
  disabled?: boolean;
  multiple?: boolean;
  size?: IconButtonProps['size'];
  iconSize?: IconProps['fontSize'];
}

const ClearButton = ({disabled = false, size = 'medium', iconSize = 'medium', multiple = false, onClick}: Props) => {
  const handleClearClick: IconButtonProps['onClick'] = useCallback(() => onClick(multiple ? [] : ''), [onClick]);
  const finalIconSize = useMemo<IconProps['fontSize']>(() => iconSize ? iconSize : size === 'medium' ? 'medium' : 'small', [iconSize, size]);
  return <IconButton
    disabled={disabled}
    size={size}
    color={'secondary'}
    onClick={handleClearClick}
    style={styles}
  >
    <CloseIcon fontSize={finalIconSize}/>
  </IconButton>
}

export default memo(ClearButton);
