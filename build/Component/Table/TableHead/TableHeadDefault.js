import React, { memo } from 'react';
import { TableCell, TableSortLabel } from '@material-ui/core';
import clsx from 'clsx';
import { globalStyles } from '../../Table/VirtualizedTable';
import { createStyles, makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => createStyles({
    noClick: {
        cursor: 'initial'
    },
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1
    },
    tableSortRoot: {
        '&:hover': {
            color: theme.palette.secondary.main
        }
    }
}));
const TableHeadDefault = ({ headerProps }) => {
    const classes = useStyles();
    const globalClasses = globalStyles();
    const mapSortDirection = (sortDirection) => sortDirection === 'ASC' ? 'asc' : 'desc';
    return (headerProps && (React.createElement(TableCell, { component: 'div', className: clsx(globalClasses.tableCell, globalClasses.flexContainer, classes.noClick), variant: 'head', style: { height: headerProps.columnData.headerHeight }, align: headerProps.columnData.numeric || false ? 'right' : 'left' },
        headerProps.disableSort !== true && (React.createElement(TableSortLabel, { classes: { root: classes.tableSortRoot }, active: headerProps.sortBy === headerProps.dataKey, direction: headerProps.sortBy === headerProps.dataKey ? mapSortDirection(headerProps.sortDirection) : 'asc' },
            headerProps.label,
            headerProps.sortBy === headerProps.dataKey ? (React.createElement("span", { className: classes.visuallyHidden }, headerProps.sortDirection.toLowerCase() === 'desc' ? 'sorted descending' : 'sorted ascending')) : null)),
        headerProps.disableSort && React.createElement("span", null, headerProps.label))));
};
export default memo(TableHeadDefault);
