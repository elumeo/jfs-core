
import { ThemeVariant } from 'Types/ThemeVariant.type';
import { Theme, createTheme } from '@mui/material/styles';
import LIGHT from './LIGHT.theme';
import LEGACY from './LEGACY.theme';
import COMIC from './COMIC.theme';
import PIXEL from './PIXEL.theme';
import HIGH_CONTRAST from './HIGH_CONTRAST.theme';



const definition = createTheme();
export const themeMap: Record<ThemeVariant, Theme> = {
  [ThemeVariant.LIGHT]: LIGHT,
  [ThemeVariant.LEGACY]: LEGACY,
  [ThemeVariant.HIGH_CONTRAST]: HIGH_CONTRAST,
  [ThemeVariant.AUTO_DETECT]: null,
  [ThemeVariant.COMIC]: COMIC,
  [ThemeVariant.PIXEL]: PIXEL,
}

export default definition;
