import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { setThemeVariant } from 'Store/Action/Theme.action'
import { pickThemeVariant } from 'Store/Selector/Core/Theme.selector'
import { ThemeVariant } from 'Types/ThemeVariant.type'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
type Props = {}
const ThemePickerMenu: React.FC<Props> = () => {
  const _themeVariant = useSelector(pickThemeVariant)
  const dispatch = useDispatch()
  const handleChange = (event: SelectChangeEvent<ThemeVariant>,) =>
    dispatch(setThemeVariant(event.target.value as ThemeVariant));

  console.log('ThemePickerMenu _themeVariant', _themeVariant);
  return <FormControl fullWidth>
    <InputLabel id='theme-picker-label'>Theme Variante</InputLabel>
    <Select<ThemeVariant>
      labelId='theme-picker-label'
      id='theme-picker'
      value={_themeVariant}
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
