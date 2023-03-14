import React, {memo, ReactNode} from "react";
import {Box, Chip, Typography} from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import IconButtonClear from 'Component/Select/IconButtonClear';

type Props<T> = {
  selected: T,
  maxValuesShown?: number;
  labelsByValue: Record<string, string>;
  onUnselect: (value: string) => void;
  onClear: () => void;
  isInClearableState: boolean;
}

const ValueRenderer = <T, >({selected, labelsByValue, onUnselect, onClear, maxValuesShown, isInClearableState}: Props<T>) => {
  let renderedValue: ReactNode;
  if (Array.isArray(selected)) {
    let selectedItems = [...selected];
    if (maxValuesShown) {
      selectedItems = selectedItems.slice(0, maxValuesShown);
    }
    renderedValue = <>
      {selectedItems.map(value => <Chip
        key={value}
        label={labelsByValue[value]}
        onDelete={() => onUnselect(value)}
        deleteIcon={<CancelIcon onMouseDown={event => event.stopPropagation()}/>}
      />)}
      {Array.isArray(selected) && selectedItems.length < selected.length &&
        <Typography fontSize={'1.1rem'} pt={'6px'}>+{selected.length - selectedItems.length}</Typography>}
    </>;
  } else {
    renderedValue = labelsByValue[selected as string];
  }
  return <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 0.5}}>
    {renderedValue}
    {isInClearableState && <IconButtonClear onClear={onClear}/>}
  </Box>
}

export default memo(ValueRenderer);
