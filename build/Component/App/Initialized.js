import React, { memo } from 'react';
import { IntlProvider } from 'react-intl';
import * as Notification from '../Notification';
import { SnackbarProvider } from 'notistack';
import { createStyles, makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => createStyles({
    variantSuccess: {
        backgroundColor: theme.palette.success.main,
        color: theme.palette.getContrastText(theme.palette.success.main),
    },
    variantError: {
        backgroundColor: theme.palette.error.main,
        color: theme.palette.getContrastText(theme.palette.error.main),
    },
    variantWarning: {
        backgroundColor: theme.palette.warning.main,
        color: theme.palette.getContrastText(theme.palette.warning.main),
    },
    variantInfo: {
        backgroundColor: theme.palette.info.main,
        color: theme.palette.getContrastText(theme.palette.info.main),
    }
}));
const Initialized = ({ translations, language, children }) => {
    const classes = useStyles();
    return React.createElement(IntlProvider, { locale: language, messages: translations[language] },
        React.createElement(React.Fragment, null,
            React.createElement(SnackbarProvider, { classes: {
                    variantSuccess: classes.variantSuccess,
                    variantError: classes.variantError,
                    variantWarning: classes.variantWarning,
                    variantInfo: classes.variantInfo,
                }, anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'right',
                }, maxSnack: 5, domRoot: document.getElementById('overlay') },
                React.createElement(Notification.Notistack, null),
                children)));
};
export default memo(Initialized);
