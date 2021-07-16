import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';
import * as Color from '../../Constant/Color';
import { grey } from '@material-ui/core/colors';
export default responsiveFontSizes(createTheme({
    overrides: {
        MuiCssBaseline: {
            '@global': {
                body: {
                    margin: 0,
                    padding: 0,
                    fontFamily: 'Roboto',
                }
            }
        },
        MuiListItemIcon: {
            root: {
                minWidth: 32
            }
        },
    },
    typography: {
        fontSize: 13,
        body1: {
            fontSize: 14
        }
    },
    palette: {
        type: 'light',
        primary: Color.primary,
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
            default: '#e5e2dd',
        }
    }
}));
