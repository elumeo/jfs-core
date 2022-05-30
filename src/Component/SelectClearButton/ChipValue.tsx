import React, {CSSProperties, memo, MouseEventHandler} from 'react';
import CancelIcon from '@material-ui/icons/Cancel';
import {Chip, ChipProps} from '@material-ui/core';

const styles: CSSProperties = {
  height: '20px',
}

export type Props = Partial<Omit<ChipProps, 'onDelete'>> & {
  onDelete: MouseEventHandler<HTMLDivElement>;
  value: string;
}

const ChipValue = ({onDelete, value, ...rest}: Props) => {
  return <Chip
    onDelete={() => null}
    deleteIcon={<div onMouseDown={onDelete}><CancelIcon fontSize={'small'}/>
    </div>}
    label={value}
    size={'small'}
    style={styles}
    {...rest}
  />;
}

export default memo(ChipValue);
