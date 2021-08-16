import React, { memo } from 'react';
import { CardHeader, Grid, IconButton, LinearProgress, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import RefreshIcon from '@material-ui/icons/Refresh';
const useStyles = makeStyles((theme) => createStyles({
    cardHeaderRoot: {
        position: 'relative',
        alignItems: 'flex-start'
    },
    progress: {
        position: 'absolute',
        width: 'calc(100% + ' + theme.spacing(4) + 'px)',
        top: 0,
        left: -theme.spacing(2)
    },
    refreshButtonRoot: {
        verticalAlign: -theme.spacing(0.5),
        padding: theme.spacing(0.25), // '2px'
    }
}));
const AppCardHeader = ({ isLoading = false, title, subtitle = null, titleIcon = null, onRefresh = null, refreshButtonColor = 'secondary', refreshButtonSize = 'small', action = null }) => {
    const classes = useStyles();
    const buildRefreshButton = () => {
        return React.createElement(Grid, { item: true },
            React.createElement(IconButton, { color: refreshButtonColor, classes: { root: classes.refreshButtonRoot }, size: refreshButtonSize, disabled: isLoading, onClick: onRefresh },
                React.createElement(RefreshIcon, null)));
    };
    const headerTitle = React.createElement(React.Fragment, null,
        isLoading && React.createElement(LinearProgress, { className: classes.progress, color: 'secondary' }),
        React.createElement(Grid, { container: true, spacing: 1, alignItems: 'center' },
            titleIcon !== null && React.createElement(Grid, { item: true }, titleIcon),
            React.createElement(Grid, { item: true },
                React.createElement(Typography, { variant: 'h5' }, title)),
            onRefresh !== null && buildRefreshButton()));
    return React.createElement(CardHeader, { className: classes.cardHeaderRoot, subheader: subtitle, title: headerTitle, action: action });
};
export default memo(AppCardHeader);
