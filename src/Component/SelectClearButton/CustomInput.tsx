import { Clear } from '@mui/icons-material'
import { OutlinedInput, FilledInput, Input, InputBaseProps, InputAdornment, IconButton } from '@mui/material'
import React from 'react'
import { SelectProps } from './SelectClearButton'
type Props = InputBaseProps & {
  variant: SelectProps['variant']
  label: React.ReactNode
  canClear: boolean,
  onClear: () => void
}

const inputComponentByVariant = (variant: SelectProps['variant']) => {
  switch (variant) {
    case 'outlined':
      return OutlinedInput
    case 'filled':
      return FilledInput
    case 'standard': return Input
    default:
      return Input
  }
}

const CustomInput: React.FC<Props> = ({ variant = 'standard', label, onClear, canClear,  ...inputProps }) => {
  const Determined = React.useMemo(() => inputComponentByVariant(variant), [variant])
  return <Determined
    label={label}
    endAdornment={
      canClear
        ? <InputAdornment
          position='end'>
          <IconButton
            color='secondary'
            size={variant !== 'standard' ? 'medium' : 'small'}
            onClick={onClear}>
            <Clear />
          </IconButton>
        </InputAdornment>
        : <></>
    }
    {...inputProps} />
}
export default CustomInput
