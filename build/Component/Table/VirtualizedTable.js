var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { TableCell, TableSortLabel } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { AutoSizer, Column, Table } from 'react-virtualized';
import React, { memo } from 'react';
import clsx from 'clsx';
export const virtualizedGlobalStyles = makeStyles(theme => createStyles({
    flexContainer: {
        display: 'flex',
        alignItems: 'center',
        boxSizing: 'border-box',
    },
    table: {
        '& .ReactVirtualized__Table__headerRow': {
            flip: false,
            paddingRight: theme.direction === 'rtl' ? '0 !important' : undefined,
        },
    },
    tableGrid: {
        outline: 'none',
    },
    tableRow: {
        cursor: 'pointer',
    },
    tableRowHover: {
        '&:hover': {
            backgroundColor: theme.palette.grey[200],
        },
    },
    tableCell: {
        flex: 1,
        fontSize: theme.typography.pxToRem(13),
        padding: theme.spacing(1),
        maxWidth: '100%'
    },
    noClick: {
        cursor: 'initial',
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
        width: 1,
    }
}));
const VirtualizedTable = React.forwardRef((_a, ref) => {
    var { columns, onRowClick, rowCount, rowGetter, headerHeight = 48, rowHeight = 48, showRowHoverHighlight = false } = _a, tableProps = __rest(_a, ["columns", "onRowClick", "rowCount", "rowGetter", "headerHeight", "rowHeight", "showRowHoverHighlight"]);
    const classes = virtualizedGlobalStyles();
    const getRowClassName = (index) => clsx(classes.tableRow, classes.flexContainer, {
        [classes.tableRowHover]: index.index !== -1 && showRowHoverHighlight === true,
    });
    const cellRenderer = ({ cellData, columnIndex }) => {
        return (React.createElement(TableCell, { component: 'div', className: clsx(classes.tableCell, classes.flexContainer, {
                [classes.noClick]: onRowClick == null,
            }), variant: 'body', style: { height: rowHeight }, align: (columnIndex != null && columns[columnIndex].numeric) || false ? 'right' : 'left' }, cellData));
    };
    const mapSortDirection = (sortDirection) => sortDirection === 'ASC' ? 'asc' : 'desc';
    const headerRenderer = (headerProps) => {
        return (React.createElement(TableCell, { component: 'div', className: clsx(classes.tableCell, classes.flexContainer, classes.noClick), variant: 'head', style: { height: headerHeight }, align: columns[headerProps.columnIndex].numeric || false ? 'right' : 'left' },
            tableProps.sort !== undefined && headerProps.disableSort !== true && React.createElement(TableSortLabel, { active: headerProps.sortBy === headerProps.dataKey, direction: headerProps.sortBy === headerProps.dataKey ? mapSortDirection(headerProps.sortDirection) : 'asc' },
                headerProps.label,
                headerProps.sortBy === headerProps.dataKey ? (React.createElement("span", { className: classes.visuallyHidden }, headerProps.sortDirection.toLowerCase() === 'desc' ? 'sorted descending' : 'sorted ascending')) : null),
            tableProps.sort === undefined && React.createElement("span", null, headerProps.label)));
    };
    return (React.createElement(AutoSizer, null, ({ height, width }) => (React.createElement(Table, Object.assign({ ref: ref, height: height, width: width, className: classes.table, headerHeight: headerHeight, rowHeight: rowHeight, rowCount: rowCount, rowGetter: rowGetter, rowClassName: getRowClassName, onRowClick: onRowClick, gridStyle: { direction: 'inherit' }, gridClassName: classes.tableGrid }, tableProps), columns.map((_a, index) => {
        var { dataKey } = _a, other = __rest(_a, ["dataKey"]);
        return (React.createElement(Column, Object.assign({ key: dataKey, headerRenderer: (headerProps) => headerRenderer(Object.assign(Object.assign({}, headerProps), { columnIndex: index })), className: classes.flexContainer, cellRenderer: cellRenderer, dataKey: dataKey }, other)));
    })))));
});
export default memo(VirtualizedTable);
