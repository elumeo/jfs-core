import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import * as UserConfig from 'API/LOCAL_STORAGE/UserConfig'
import useTheme from 'Component/App/Stateless/Style/Theme/useTheme'
import { saveToLocalStorage } from 'Store/Action/LocalStorage.action'
import { useSelector } from 'Types/Redux'
import { ThemeVariant } from 'Types/ThemeVariant.type'
import React from 'react'
import { useDispatch } from 'react-redux'
type Props = {}
const ThemePickerMenu: React.FC<Props> = () => {
  const { themeVariant, } = useTheme()
  const dispatch = useDispatch()
  const userId = useSelector(state => state?.Core?.Session?.sessionDTO?.username ?? '')
  const handleChange = React.useCallback(
    (event: SelectChangeEvent<ThemeVariant>,) =>
      dispatch(saveToLocalStorage([userId, UserConfig.themeFeature].join(UserConfig.SEPERATOR), event.target.value))
    , [userId])

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
