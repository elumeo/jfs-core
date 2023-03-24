import React, {memo, useCallback} from 'react';
import {ChipProps, Grid} from '@material-ui/core';
import ChipValue from 'Component/SelectClearButton/ChipValue';
import {SelectOption} from 'Component/SelectClearButton/index';

export type Props = {
  onDeleteItem?: (value: string) => void;
  setValue: (value: string[]) => void;
  selectedValue: SelectOption[];
  maxValuesToDisplayInInput?: number;
  renderValueAsChip?: boolean;
  valueChipProps?: Partial<ChipProps>;
}

const MultipleValueRenderer = ({
                                 setValue,
                                 valueChipProps,
                                 selectedValue,
                                 onDeleteItem,
                                 maxValuesToDisplayInInput = 1,
                                 renderValueAsChip = false
                               }: Props) => {
  const handleChipOnDelete = useCallback((selectedItem: string) => {
    onDeleteItem !== undefined
      ? onDeleteItem(selectedValue.find(value => value.value === selectedItem).value ?? null)
      : setValue(selectedValue.filter(value => value.value !== selectedItem).map(value => value.value))
  }, [selectedValue]);

  return <Grid container spacing={1} alignItems={'center'} wrap={'nowrap'}>
    <Grid item style={{maxWidth: '100%'}}>
      <Grid container wrap={'nowrap'} spacing={1}>
        {selectedValue
          .filter((label, index) => index < maxValuesToDisplayInInput)
          .map((selectedItem, index) => renderValueAsChip
            ? <Grid item key={'select-clear-button-multiple-value-renderer-chip-value-' + selectedItem.value + '-' + index} style={{maxWidth: (100 / Math.min(selectedValue.length, maxValuesToDisplayInInput)) + '%'}}>
              <ChipValue
                onDelete={handleChipOnDelete}
                value={selectedItem.value}
                label={selectedItem.label}
                {...valueChipProps}
              />
            </Grid>
            : (index > 0 ? ', ' + selectedItem.label : selectedItem.label))}
      </Grid>
    </Grid>
    <Grid item>
      {selectedValue.length > maxValuesToDisplayInInput && <Grid item> +{(selectedValue.length - maxValuesToDisplayInInput)}</Grid>}
    </Grid>
  </Grid>
}

export default memo(MultipleValueRenderer);
