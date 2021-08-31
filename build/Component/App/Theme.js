import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';
import * as Color from '../../Constant/Color';
import { grey } from '@material-ui/core/colors';
const theme = responsiveFontSizes(createTheme({
    props: {
        MuiCircularProgress: {
            color: 'secondary',
        },
        MuiLinearProgress: {
            color: 'secondary',
        },
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
        info: Color.info,
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
        },
    },
}));
theme.overrides = {
    MuiCssBaseline: {
        '@global': {
            html: {
                fontSize: 14,
            },
            body: {
                margin: 0,
                padding: 0,
                fontFamily: 'Roboto',
            },
        },
    },
    MuiChip: {
        label: {
            fontSize: '0.925rem',
        }
    },
    MuiListItem: {
        root: {
            paddingTop: theme.spacing(0.5),
            paddingBottom: theme.spacing(0.5)
        }
    },
    MuiMenuItem: {
        root: {
            paddingTop: theme.spacing(0.5),
            paddingBottom: theme.spacing(0.5)
        }
    },
    MuiListItemIcon: {
        root: {
            minWidth: 32,
        },
    },
    MuiTooltip: {
        tooltip: {
            fontSize: '0.875rem',
            fontWeight: 400,
            lineHeight: 1.43,
            letterSpacing: '0.01071em',
        },
    },
};
export default theme;
