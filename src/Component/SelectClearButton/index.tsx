// import React, { memo, ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
export { default } from './SelectClearButton';
export type { SelectProps } from './SelectClearButton';
// import {
//   Box, Checkbox, ChipProps, CircularProgress, FormControl, FormControlProps, IconProps, InputLabel, MenuItem, Select, SxProps, TextFieldProps
// } from '@mui/material';
// import { type SelectProps as MUISelectProps } from '@mui/material/Select'
// import { IconButtonProps } from '@mui/material/IconButton';
// import ValueRenderer, { type Props as ValueRendererProps } from 'Component/SelectClearButton/ValueRenderer';
// import EndAdornment, { type Props as EndAdornmentProps } from 'Component/SelectClearButton/EndAdornment';
// import TextFieldClearButton, { TextFieldClearButtonProps } from 'Component/TextFieldClearButton';

// const loadingStyle: SxProps = { textAlign: 'center' };

// const getSx = <IsMulti extends boolean>({ renderAsChip, value }: Partial<SelectProps<IsMulti>>): SxProps => ({
//   pb: renderAsChip && (value as string | string[])?.length > 0 ? 0.5 : 1
// })

// export type SelectOption = {
//   value: string;
//   label: React.ReactNode;
// }

// export type SelectProps<IsMulti> = MUISelectProps<IsMulti extends true ? string[] : string> & {
//   canClear?: boolean;
//   canUnselect?: boolean;
//   // onChange: (value: string | string[]) => void;
//   renderAsChip?: boolean;
//   loading: boolean;
//   // clearButtonSize?: IconButtonProps['size'];
//   // clearIconSize?: IconProps['fontSize'];
//   formControlProps?: Partial<FormControlProps>;
//   // valueChipProps?: Partial<ChipProps>;
//   // renderValueAsChip?: boolean;
//   // maxValuesToDisplayInInput?: number;
//   // options: SelectOption[];
//   // loading?: boolean;
//   loadingSize?: number;
//   // displayClearButton?: boolean;
// }

// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// const SelectClearButton: React.FC = <IsMulti extends boolean = MUISelectProps['multiple']>({
//   onChange,
//   renderAsChip,
//   value,
//   canClear,
//   canUnselect,
//   // clearButtonSize = 'small',
//   // clearIconSize = 'small',
//   // endAdornment,
//   formControlProps = {},
//   // valueChipProps = {},
//   // renderValueAsChip = false,
//   // maxValuesToDisplayInInput = 1,
//   options,
//   loading = false,
//   loadingSize = 20,
//   // displayClearButton = true,
//   ...rest
// }: SelectProps<IsMulti>) => {
//   const labelId = React.useId()
//   const [showClearButton, setShowClearButton] = useState(false);
//   const [inputValue, setInputValue] = useState<string | string[]>(rest.multiple ? [] : '');
//   const classes = getSx<IsMulti>({ renderAsChip, value });

//   // const handleShowClearButtonState = (value: string | string[]) => {
//   //   if (showClearButton === false && value.length > 0) {
//   //     setShowClearButton(true);
//   //   } else if (showClearButton === true && value.length <= 0) {
//   //     setShowClearButton(false);
//   //   }
//   // }

//   // useEffect(() => {
//   //   if (rest.value !== undefined) {
//   //     handleShowClearButtonState(rest.value as string | string[]);

//   //     if (inputValue !== rest.value) {
//   //       setInputValue(rest.value as string | string[]);
//   //     }
//   //   }
//   // }, [rest.value]);

//   // const handleOnChange = React.useCallback((value: string | string[]) => {
//   //   handleShowClearButtonState(value);
//   //   setInputValue(value);
//   //   if (onChange) {
//   //     onChange(value);
//   //   }
//   // }, [onChange, inputValue]);

//   // const handleOnChangeEvent: SelectProps['onChange'] = React.useCallback(event => {
//   //   const eventValue = event?.target?.value ? event.target.value : rest.multiple ? [] : '';
//   //   handleOnChange(eventValue);
//   // }, [onChange, inputValue]);

//   // const handleOnDeleteItem: ValueRendererProps['onDeleteItem'] = React.useCallback(item => {
//   //   const eventValue = rest.multiple ? (inputValue as string[]).filter(value => value !== item) : '';
//   //   handleOnChange(eventValue);
//   // }, [onChange, inputValue]);

//   const isInputValueEmpty = useMemo<boolean>(() => inputValue.length <= 0, [inputValue]);
  // return <FormControl fullWidth {...formControlProps}>
  //   {rest.label && <InputLabel id={labelId}>{rest.label}</InputLabel>}
//     <Select
//       sx={classes}
//       labelId={labelId}
//       {...rest}
//       input={<TextFieldClearButton />}
//       // onChange={handleOnChange}
//       // endAdornment={
//       //   <EndAdornment
//       //     endAdornment={endAdornment}
//       //     showClearButton={displayClearButton && showClearButton}
//       //     clearButtonSize={clearButtonSize}
//       //     clearIconSize={clearIconSize}
//       //     // onClickClearButton={handleOnChange}
//       //     disabled={rest.disabled}
//       //     multiple={rest.multiple}
//       //   />}
//       autoComplete={'new-password'}
//       value={inputValue}
//       renderValue={(selected: string | string[]) =>
//         (Array.isArray(selected) ? selected : [selected]).map(val => <Box>{val}</Box>)
//         // <ValueRenderer
//         //   selectedValue={rest.multiple
//         //     ? options.filter((option: SelectOption) => (selected as string[]).includes(option.value))
//         //     : options.find((option: SelectOption) => option.value === (selected as string))
//         //   }
//         //   renderValueAsChip={renderValueAsChip}
//         //   maxValuesToDisplayInInput={maxValuesToDisplayInInput}
//         //   // onDeleteItem={handleOnDeleteItem}
//         //   valueChipProps={valueChipProps}
//         //   setValue={setInputValue}
//         //   multiple={rest.multiple}
//         // />
//       }
//     >
      // {loading && <Box sx={loadingStyle}><CircularProgress size={loadingSize} /></Box>}
      // {loading === false && options.map((option: SelectOption) => <MenuItem key={'select-menu-item-' + option.value} value={option.value} selected={(inputValue as string[]).includes(option.value)}>
      //   {rest.multiple && <Checkbox sx={checkboxStyle} checked={(inputValue as string[]).includes(option.value)} size={'small'} />}
      //   {option.label}
      // </MenuItem>)}
//     </Select>
//   </FormControl>;
// };

// export default SelectClearButton
