import React from 'react'
import { InputBaseProps, Checkbox, ChipProps, CircularProgress, FormControl, FormControlProps, InputLabel, MenuItem, Select, SelectProps as MUISelectProps, IconButton, } from '@mui/material';
import ValueRenderer, { ValueType } from './ValueRenderer';
import CustomInput from './CustomInput';
import Flex from '../Layout/Flex';
import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material';
export type SelectOption = {
  value: string;
  label: React.ReactNode;
}
export type SelectProps<IsMulti extends boolean = undefined> = Partial<Omit<MUISelectProps<ValueType<IsMulti>>, 'onChange' | 'value'>> & {
  canClear?: boolean;
  canUnselect?: boolean;
  renderAsChip?: boolean;
  maxValuesToDisplayInInput?: number;
  formControlProps?: Partial<FormControlProps>;
  chipProps?: Partial<ChipProps>;
  inputProps?: InputBaseProps
  options?: SelectOption[];
  value?: IsMulti extends true ? string[] : string;
  label?: React.ReactNode
  onChange: (value: IsMulti extends true ? string[] : string) => void;
  loading?: boolean;
  loadingSize?: number;
} & (
    | { options: SelectOption[]; children?: never; }
    | { children: React.ReactNode; options?: never; }
  )
const SelectClearButton = <IsMulti extends boolean = MUISelectProps['multiple']>({
  onChange,
  renderAsChip = true,
  value,
  variant = 'standard',
  canClear = true,
  canUnselect = true,
  label,
  color = 'secondary',
  chipProps = {},
  formControlProps = {},
  inputProps = {},
  children,
  options,
  maxValuesToDisplayInInput = 2,
  loading = false,
  loadingSize = 20,
  ...rest
}: SelectProps<IsMulti>) => {
  const labelId = React.useId()
  const [isOpen, setIsOpen] = React.useState(false)
  const multiple = rest?.multiple
  const labelsByValue = React.useMemo<Record<string, string>>(() =>
    (options ?? []).reduce((acc, o) => ({ ...acc, [o.value]: o.label }), {}),
    [options]
  )
  const values = React.useMemo<string[]>(() =>
    !value ? []
      : Array.isArray(value)
        ? value
        : [value]
    ,
    [value]
  )
  const unselect = React.useCallback(
    (v: string) =>
      onChange(
        multiple
          ? values.filter(vv => vv !== v) as ValueType<IsMulti>
          : null
      )
    ,
    [values, onChange, multiple]
  )
  const open = React.useCallback(() => setIsOpen(true), [setIsOpen])
  const close = React.useCallback(() => setIsOpen(false), [setIsOpen])
  return <FormControl fullWidth {...formControlProps}>
    {label && <InputLabel color={color} id={labelId}>{label}</InputLabel>}
    <Select<ValueType<IsMulti>>
      labelId={labelId}
      value={value ?? (multiple ? [] : '') as ValueType<IsMulti>}
      multiple={multiple}
      MenuProps={{
        container: document.getElementById('overlay'),
      }}
      color={color}
      open={isOpen}
      onOpen={open}
      onClose={close}
      IconComponent={() => isOpen
        ? <IconButton disabled={rest.disabled} disableRipple onClick={open}><ArrowDropUp color='inherit' /></IconButton>
        : <IconButton disabled={rest.disabled} disableRipple onClick={open}><ArrowDropDown color='inherit' /></IconButton>}
      onChange={(e) => onChange(e.target.value as ValueType<IsMulti>)}
      input={
        <CustomInput
          label={label}
          variant={variant}
          color={color}
          canClear={canClear && values.length > 0}
          onClear={() => onChange((multiple ? [] : null) as ValueType<IsMulti>)}
          {...inputProps} />
      }
      {...rest}
      renderValue={() =>
        <ValueRenderer
          values={values}
          labelsByValue={labelsByValue}
          renderAsChip={renderAsChip}
          maxValuesToDisplayInInput={maxValuesToDisplayInInput}
          onClick={open}
          canUnselect={canUnselect}
          unselect={unselect}
          {...chipProps}
          size='small' />
      }
    >
      {
        loading
          ? (
            <Flex alignItems={'center'} >
              <CircularProgress size={loadingSize} color={color} />
            </Flex>
          )
          : children || options.map(
            (option: SelectOption) =>
              <MenuItem
                key={'select-menu-item-' + option.value}
                value={option.value}
                color={color}
                TouchRippleProps={{ color: color }}
                selected={
                  Array.isArray(value)
                    ? (value as string[]).includes(option.value)
                    : value === option.value
                }
              >
                {multiple &&
                  <Checkbox
                    color={color}
                    checked={(value as string[]).includes(option.value)}
                    size={'small'} />
                }
                {option.label}
              </MenuItem>
          )
      }
    </Select >
  </FormControl >
}
export default SelectClearButton
