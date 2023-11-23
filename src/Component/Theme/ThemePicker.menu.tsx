import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import useTheme from 'Effect/useTheme'
import { savePreferredThemeVariant } from 'Store/Action/Theme.action'
import { ThemeVariant } from 'Types/ThemeVariant.type'
import React from 'react'
import { useDispatch } from 'react-redux'
type Props = {}
const ThemePickerMenu: React.FC<Props> = () => {
  const { themeVariant, } = useTheme()
  const dispatch = useDispatch()
  const handleChange = (event: SelectChangeEvent<ThemeVariant>) =>
    dispatch(savePreferredThemeVariant(event.target.value as ThemeVariant))
  return <FormControl fullWidth>
    <InputLabel id='theme-picker-label'>Theme Variante</InputLabel>
    <Select<ThemeVariant>
      labelId='theme-picker-label'
      id='theme-picker'
      value={themeVariant}
      label='theme'
      onChange={handleChange}
    >
      {
        Object.keys(ThemeVariant).map((themeVariant) => {
          return <MenuItem key={themeVariant} value={themeVariant as ThemeVariant}>{themeVariant}</MenuItem>
        })
      }
    </Select>
  </FormControl>
}
export default ThemePickerMenu
