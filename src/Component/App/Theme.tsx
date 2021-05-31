import {createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import * as Color from 'Constant/Color';

const Theme = () => {
  let theme = createMuiTheme({
    overrides: {
      MuiCssBaseline: {
        '@global': {
          '#root': {
            background: Color.quarz[500],
          },
          html:{
            // fontSize: '87.5%'
          },
          body: {
            margin: 0,
            background: Color.quarz[500],
            padding: 0,
            fontFamily: 'Roboto',
          }
        }
      }
    },
    typography: {
      // fontSize: 13,  
      // htmlFontSize: 14,
    //   test : createTypography({
    //     color : 'red'
    //   }) as  TypographyVariant 
    },
    palette: {
      type: 'light',
      primary: {
        main: Color.primary,
        // light: rodolith[700],
        // dark: '#002884',
        contrastText: '#fff'
      },
      secondary: {
        main: Color.apatith[900],
        // light: 'apatith[700]',
        // dark: '#ba000d',
        contrastText: '#fff'
      },
      text: {
        primary: Color.grey[900],
        secondary: Color.grey[700],
        disabled: Color.grey[500],
        hint: Color.grey[300],
      },
      success : {
        main: Color.success,
        // light: '#81c784',
        // dark: '#388e3c',
        contrastText : '#fff'
      },
      warning:{
        main: Color.warning,
        // light: '#ffb74d',
        // dark: '#f57c00',
        contrastText: '#fff'
      },
      error: {
        main: '#f44336',
        // light: '#e57373',
        // dark: '#d32f2f',
        contrastText: '#fff'
      },

      // error: {
      //   main: 'rgb(215, 15, 65)',
      //   light: 'rgb(240, 140, 140)',
      //   // dark :
      // }
    }
  });

  theme = responsiveFontSizes(theme)
  return theme
};
export default Theme;
