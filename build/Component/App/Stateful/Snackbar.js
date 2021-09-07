import React, { memo } from 'react';
import * as Notification from '../../Notification';
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
const Snackbar = ({ children }) => {
    const classes = useStyles();
    return (React.createElement(SnackbarProvider, { classes: classes, anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'right',
        }, maxSnack: 5, domRoot: document.getElementById('overlay') },
        React.createElement(Notification.Notistack, null),
        children));
};
export default memo(Snackbar);
