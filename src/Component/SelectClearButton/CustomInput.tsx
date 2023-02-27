import { Clear } from '@mui/icons-material'
import { OutlinedInput, FilledInput, Input, InputProps, InputAdornment, IconButton, Stack, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import React from 'react'
import { SelectProps } from './SelectClearButton'
type Props = InputProps & {
  variant: SelectProps['variant']
  label: React.ReactNode
  canClear: boolean,
  onClear: () => void
  helperText?: React.ReactNode

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

const CustomInput: React.FC<Props> = ({ variant = 'standard', label, onClear, canClear, helperText, ...inputProps }) => {
  const Determined = React.useMemo(() => inputComponentByVariant(variant), [variant])
  return (
    <Stack spacing={0.25}>
      <Determined
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
      {helperText && <Typography variant='caption' color={grey[700]}>{helperText}</Typography>}
    </Stack>
  )
}
export default CustomInput
