import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import * as Color from 'Constant/Color';
import { grey } from '@material-ui/core/colors';

const Theme = () => {
  let theme = createMuiTheme({
    overrides: {
      MuiCssBaseline: {
        '@global': {
          html: {
            // fontSize: '87.5%'
          },
          body: {
            margin: 0,
            padding: 0,
            fontFamily: 'Roboto',
          }
        }
      }
    },
    typography: {
      fontSize: 13,
    },
    palette: {
      type: 'light',
      primary: Color.rubin,
      secondary: Color.apatith,
      text: {
        primary: grey[900],
        secondary: grey[700],
        disabled: grey[500],
        hint: grey[300],
      },
      success: Color.success,
      warning: Color.warning,
      error: Color.error,
      rubin: Color.rubin,
      rodolith: Color.rodolith,
      topas: Color.topas,
      apatith: Color.apatith,
      peridot: Color.peridot,
      citrin: Color.citrin,
      quarz: Color.quarz,
      background: {
        default: Color.quarz.main,
      }
    }
  });

  theme = responsiveFontSizes(theme)
  return theme
};
export default Theme;
