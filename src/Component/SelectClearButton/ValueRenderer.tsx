import React, {memo} from "react";
import {ChipProps} from "@material-ui/core";
import MultipleValueRenderer from "Component/SelectClearButton/MultipleValueRenderer";
import SingleValueRenderer from "Component/SelectClearButton/SingleValueRenderer";

export type Props = {
  multiple: boolean;
  onDeleteItem?: (item: string) => void;
  value: string | string[];
  setValue: (value: string | string[]) => void;
  selected: string | string[];
  maxValuesToDisplayInInput?: number;
  renderValueAsChip?: boolean;
  valueChipProps?: Partial<ChipProps>;
}

const ValueRenderer = ({
                         multiple, value,
                         setValue,
                         valueChipProps,
                         selected,
                         onDeleteItem,
                         maxValuesToDisplayInInput = 1,
                         renderValueAsChip = false
                       }: Props) => {
  return <>
    {multiple === true && <MultipleValueRenderer
      selected={selected as string[]}
      value={value as string[]}
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
      selected={selected as string}
    />}
  </>
}

export default memo(ValueRenderer);
