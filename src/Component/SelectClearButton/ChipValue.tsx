import React, {CSSProperties, memo, ReactNode} from 'react';
import CancelIcon from '@material-ui/icons/Cancel';
import {Chip, ChipProps} from '@material-ui/core';

const styles: CSSProperties = {
  height: '20px',
  maxWidth: '100%',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
}

export type Props = Partial<Omit<ChipProps, 'onDelete'>> & {
  onDelete: (value: string) => void;
  value: string;
  label: ReactNode;
}

const ChipValue = ({onDelete, value, label, ...rest}: Props) => {
  return <Chip
    onDelete={() => null}
    deleteIcon={<div onMouseDown={event => {
      event.stopPropagation();
      onDelete(value);
    }}><CancelIcon fontSize={'small'}/>
    </div>}
    label={label}
    size={'small'}
    style={styles}
    {...rest}
  />;
}

export default memo(ChipValue);
