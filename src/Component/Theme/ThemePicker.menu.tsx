import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { savePreferredThemeVariant } from 'Store/Action/Theme.action'
import { ThemeVariant } from 'Types/ThemeVariant.type'
import React from 'react'
import { useDispatch } from 'react-redux'
import { FormattedMessage } from "react-intl";
import usePreferredThemeVariant from "Effect/usePreferredThemeVariant";

type Props = {}
const ThemePickerMenu: React.FC<Props> = () => {
  const themeVariant = usePreferredThemeVariant()
  const dispatch = useDispatch()
  const handleChange = (event: SelectChangeEvent<ThemeVariant>) =>
    dispatch(savePreferredThemeVariant(event.target.value as ThemeVariant))
  return (
    <FormControl fullWidth>
      <InputLabel id='theme-picker-label'>Theme</InputLabel>
      <Select<ThemeVariant>
        labelId='theme-picker-label'
        id='theme-picker'
        value={themeVariant}
        label='theme'
        onChange={handleChange}
      >
        {
          Object.keys(ThemeVariant).map((themeVariant) => {
            return <MenuItem key={themeVariant} value={themeVariant as ThemeVariant}>
              <FormattedMessage id={`app.themeVariant.${themeVariant}`}/>
            </MenuItem>
          })
        }
      </Select>
    </FormControl>
  )
}
export default ThemePickerMenu
