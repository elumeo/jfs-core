import React, {memo, MouseEventHandler, useCallback} from 'react';
import {ChipProps, Grid} from '@material-ui/core';
import ChipValue from 'Component/SelectClearButton/ChipValue';

export type Props = {
  onDeleteItem?: (item: string) => void;
  value: string[];
  setValue: (value: string[]) => void;
  selected: string[];
  maxValuesToDisplayInInput?: number;
  renderValueAsChip?: boolean;
  valueChipProps?: Partial<ChipProps>;
}

const MultipleValueRenderer = ({
                                 value,
                                 setValue,
                                 valueChipProps,
                                 selected,
                                 onDeleteItem,
                                 maxValuesToDisplayInInput = 1,
                                 renderValueAsChip = false
                               }: Props) => {
  const handleChipOnDelete = useCallback<(selectedItem: string) => MouseEventHandler<HTMLDivElement>>(selectedItem => event => {
    event.stopPropagation();
    onDeleteItem !== undefined
      ? onDeleteItem(value.find(value => value === selectedItem) ?? null)
      : setValue(value.filter(value => value !== selectedItem))
  }, [selected, value]);

  return <Grid container spacing={1} alignItems={'center'}>
    {selected
      .filter((label, index) => index < maxValuesToDisplayInInput)
      .map((selectedItem, index) => renderValueAsChip
        ? <Grid item key={'select-clear-button-multiple-value-renderer-chip-value-' + selected + '-' + index}>
          <ChipValue onDelete={handleChipOnDelete(selectedItem)} value={selectedItem}{...valueChipProps}/>
        </Grid>
        : (index > 0 ? ', ' + selectedItem : selectedItem))}
    {selected.length > maxValuesToDisplayInInput && <Grid item> +{(selected.length - maxValuesToDisplayInInput)}</Grid>}
  </Grid>
}

export default memo(MultipleValueRenderer);
