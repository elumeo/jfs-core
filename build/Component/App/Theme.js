import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import * as Color from '../../Constant/Color';
const Theme = () => {
    return createMuiTheme({
        overrides: {
            MuiCssBaseline: {
                '@global': {
                    html: {
                        background: Color.quarz[500],
                    },
                    body: {
                        margin: 0,
                        padding: 0,
                        fontFamily: 'Roboto',
                        fontSize: 13,
                        p: {
                            fontSize: 13
                        },
                        span: {
                            fontSize: 13
                        },
                        div: {
                            fontSize: 13
                        }
                    }
                }
            }
        },
        palette: {
            type: 'light',
            primary: {
                main: Color.rodolith[900],
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
            success: {
                main: Color.success,
                // light: '#81c784',
                // dark: '#388e3c',
                contrastText: '#fff'
            },
            warning: {
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
};
export default Theme;
