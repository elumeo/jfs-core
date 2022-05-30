import React, {memo, MouseEventHandler, useCallback} from "react";
import {ChipProps} from "@material-ui/core";
import ChipValue from 'Component/SelectClearButton/ChipValue';

export type Props = {
  onDeleteItem?: (item: string) => void;
  setValue: (value: string) => void;
  selected: string;
  renderValueAsChip?: boolean;
  valueChipProps?: Partial<ChipProps>;
}

const SingleValueRenderer = ({setValue, valueChipProps, selected, onDeleteItem, renderValueAsChip = false}: Props) => {
  const handleChipOnDelete = useCallback<(selectedItem: string) => MouseEventHandler<HTMLDivElement>>(selectedItem => event => {
    event.stopPropagation();
    onDeleteItem !== undefined ? onDeleteItem(selectedItem) : setValue('')
  }, []);
  return <>
    {renderValueAsChip
      ? <ChipValue
        key={'select-clear-button-single-value-renderer-chip-value-' + selected}
        onDelete={handleChipOnDelete(selected)}
        value={selected}
        {...valueChipProps}
      />
      : selected}
  </>
}

export default memo(SingleValueRenderer);
