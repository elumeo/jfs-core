import React, {memo} from "react";
import {ChipProps} from "@material-ui/core";
import MultipleValueRenderer from "Component/SelectClearButton/MultipleValueRenderer";
import SingleValueRenderer from "Component/SelectClearButton/SingleValueRenderer";
import {SelectOption} from 'Component/SelectClearButton/index';

export type Props = {
  multiple: boolean;
  onDeleteItem?: (value: string) => void;
  setValue: (value: string | string[]) => void;
  selectedValue: SelectOption | SelectOption[];
  maxValuesToDisplayInInput?: number;
  renderValueAsChip?: boolean;
  valueChipProps?: Partial<ChipProps>;
}

const ValueRenderer = ({
                         multiple,
                         setValue,
                         valueChipProps,
                         selectedValue,
                         onDeleteItem,
                         maxValuesToDisplayInInput = 1,
                         renderValueAsChip = false
                       }: Props) => {
  return <>
    {multiple === true && <MultipleValueRenderer
      selectedValue={selectedValue as SelectOption[]}
      setValue={setValue}
      renderValueAsChip={renderValueAsChip}
      maxValuesToDisplayInInput={maxValuesToDisplayInInput}
      onDeleteItem={onDeleteItem}
      valueChipProps={valueChipProps}
    />}
    {multiple !== true && <SingleValueRenderer
      renderValueAsChip={renderValueAsChip}
      valueChipProps={valueChipProps}
      setValue={setValue}
      onDeleteItem={onDeleteItem}
      selectedValue={selectedValue as SelectOption}
    />}
  </>
}

export default memo(ValueRenderer);
