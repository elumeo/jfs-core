
import { ThemeVariant } from 'Types/ThemeVariant.type';
import { Theme, createTheme } from '@mui/material/styles';
import LIGHT from './LIGHT.theme';
import LEGACY from './LEGACY.theme';
import FRUSTRATION from './FRUSTRATION.theme';
import COMIC from './COMIC.theme';



const definition = createTheme();
export const themeMap: Record<ThemeVariant, Theme> = {
  [ThemeVariant.LIGHT]: LIGHT,
  [ThemeVariant.LEGACY]: LEGACY,
  [ThemeVariant.FRUSTRATION]: FRUSTRATION,
  [ThemeVariant.HIGH_CONTRAST]: definition,
  [ThemeVariant.HIGH_CONTRAST_INVERTED]: definition,
  [ThemeVariant.COMIC]: COMIC,
}

export default definition;
