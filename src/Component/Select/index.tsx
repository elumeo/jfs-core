import React, {ReactNode} from 'react';
import {CircularProgress, FormControl, FormControlProps, FormHelperText, InputLabel, MenuItem, Select as MuiSelect, SelectProps} from '@mui/material';
import useFormControl from '@mui/material/FormControl/useFormControl';
import {SelectChangeEvent} from '@mui/material/Select/SelectInput';
import ValueRenderer from 'Component/Select/ValueRenderer';

export type Props<T = unknown> = SelectProps<T> & {
  canClear?: boolean;
  maxValuesShown?: number;
  helperText?: ReactNode;
  loading?: boolean;
  formControlProps?: FormControlProps;
}

const Select = <T,>({children, helperText, loading = false, maxValuesShown, canClear = false, formControlProps, ...selectProps}: React.PropsWithChildren<Props<T>>) => {
  const formControl = useFormControl();

  const labelsByValue = React.useMemo(() => {
      const labelMap: Record<string, string> = {};
      React.Children.forEach(children, (child) => {
        labelMap[(child as React.ReactElement).props.value] = (child as React.ReactElement).props.children;
      });
      return labelMap;
    }, [children]
  );

  const createSelectChangeEvent = (value: T): SelectChangeEvent<T> => ({
    target: {
      value,
      name: selectProps.name,
    },
  }) as SelectChangeEvent<T>;

  const isInClearableState = Array.isArray(selectProps.value)
    ? selectProps.value.length > 0
    : selectProps.value != null;

  const onClear = () => {
    const changeEvent = createSelectChangeEvent(selectProps.multiple ? ([] as T) : null);
    selectProps.onChange(changeEvent, null);
  }

  const onUnselect = (value: string) => {
    const changeEvent = createSelectChangeEvent(Array.isArray(selectProps.value)
      ? selectProps.value.filter(selectedValue => selectedValue != value) as T
      : null);
    selectProps.onChange(changeEvent, null);
  }

  const selectContent = <>
    {selectProps.label && <InputLabel color={selectProps?.color ?? selectProps.color} id={selectProps.labelId}>{selectProps.label}</InputLabel>}
    <MuiSelect<T>
      renderValue={(selected) => <ValueRenderer
        maxValuesShown={maxValuesShown}
        labelsByValue={labelsByValue}
        selected={selected}
        onUnselect={onUnselect}
        onClear={onClear}
        isInClearableState={canClear && isInClearableState}
      />}
      {...selectProps}
    >
      {loading && <MenuItem sx={{justifyContent: 'center'}}><CircularProgress size={20} color={selectProps.color}/></MenuItem>}
      {children}
    </MuiSelect>
    {helperText && <FormHelperText>{helperText}</FormHelperText>}
  </>

  return <>
    {formControl && <>{selectContent}</>}
    {formControl === undefined && <FormControl {...formControlProps}>{selectContent}</FormControl>}
  </>;
}

export default Select;
