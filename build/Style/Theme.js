import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
const Theme = () => {
    return createMuiTheme({
        palette: {
            type: 'light',
            primary: {
                // light: 'rgb(180, 20, 110)',
                main: 'rgb(110, 30, 90)',
                //   dark: '#002884',
                contrastText: '#fff'
            },
            secondary: {
                // light: 'rgb(105, 190, 170)',
                main: 'rgb(0, 120, 125)',
                //   dark: '#ba000d',
                contrastText: '#fff'
            },
            text: {
                primary: 'rgba(0, 0, 0, 0.87)',
                secondary: 'rgba(0, 0, 0, 0.54)',
                disabled: 'rgba(0, 0, 0, 0.25)',
                hint: 'rgba(0, 0, 0, 0.1)',
            },
            success: {
                light: '#81c784',
                main: '#4caf50',
                dark: '#388e3c',
                contrastText: '#fff'
            },
            warning: {
                light: '#ffb74d',
                main: '#ff9800',
                dark: '#f57c00',
                contrastText: '#fff'
            },
            error: {
                light: '#e57373',
                main: '#f44336',
                dark: '#d32f2f',
                contrastText: '#fff'
            },
        }
    });
};
export default Theme;
//# sourceMappingURL=Theme.js.map