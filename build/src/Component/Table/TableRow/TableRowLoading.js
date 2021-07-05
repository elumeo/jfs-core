import React, { memo } from 'react';
import { CircularProgress } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
const rowStyles = makeStyles(theme => createStyles({
    CircularProgress: {
        textAlign: 'center',
        marginTop: theme.spacing(2),
    }
}));
const TableRowLoading = () => {
    const css = rowStyles();
    return React.createElement("div", { className: css.CircularProgress },
        React.createElement(CircularProgress, null));
};
export default memo(TableRowLoading);
