import React, {memo, useCallback} from "react";
import {ChipProps} from "@material-ui/core";
import ChipValue from 'Component/SelectClearButton/ChipValue';
import {SelectOption} from 'Component/SelectClearButton/index';

export type Props = {
  onDeleteItem?: (value: string) => void;
  setValue: (value: string) => void;
  selectedValue: SelectOption;
  renderValueAsChip?: boolean;
  valueChipProps?: Partial<ChipProps>;
}

const SingleValueRenderer = ({setValue, valueChipProps, selectedValue, onDeleteItem, renderValueAsChip = false}: Props) => {
  const handleChipOnDelete = useCallback((selectedItem: string) => {
    onDeleteItem !== undefined ? onDeleteItem(selectedItem) : setValue('')
  }, []);
  return <>
    {renderValueAsChip
      ? <ChipValue
        key={'select-clear-button-single-value-renderer-chip-value-' + selectedValue}
        onDelete={handleChipOnDelete}
        value={selectedValue.value}
        label={selectedValue.label}
        {...valueChipProps}
      />
      : selectedValue.label}
  </>
}

export default memo(SingleValueRenderer);
