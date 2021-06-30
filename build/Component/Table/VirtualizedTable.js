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
import { TableCell } from '@material-ui/core';
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
}));
const VirtualizedTable = React.forwardRef((_a, ref) => {
    var { columns, onRowClick, rowCount, rowGetter, headerHeight = 48, rowHeight = 48 } = _a, tableProps = __rest(_a, ["columns", "onRowClick", "rowCount", "rowGetter", "headerHeight", "rowHeight"]);
    const classes = virtualizedGlobalStyles();
    const getRowClassName = ({ index }) => {
        return clsx(classes.tableRow, classes.flexContainer, {
            [classes.tableRowHover]: index !== -1 && onRowClick != null,
        });
    };
    const cellRenderer = ({ cellData, columnIndex }) => {
        return (React.createElement(TableCell, { component: 'div', className: clsx(classes.tableCell, classes.flexContainer, {
                [classes.noClick]: onRowClick == null,
            }), variant: 'body', style: { height: rowHeight }, align: (columnIndex != null && columns[columnIndex].numeric) || false ? 'right' : 'left' }, cellData));
    };
    const headerRenderer = ({ label, columnIndex }) => {
        return (React.createElement(TableCell, { component: 'div', className: clsx(classes.tableCell, classes.flexContainer, classes.noClick), variant: 'head', style: { height: headerHeight }, align: columns[columnIndex].numeric || false ? 'right' : 'left' },
            React.createElement("span", null, label)));
    };
    return (React.createElement(AutoSizer, null, ({ height, width }) => (React.createElement(Table, Object.assign({ ref: ref, height: height, width: width, className: classes.table, headerHeight: headerHeight, rowHeight: rowHeight, rowCount: rowCount, rowGetter: rowGetter, rowClassName: getRowClassName, onRowClick: onRowClick, gridStyle: { direction: 'inherit' }, gridClassName: classes.tableGrid }, tableProps), columns.map((_a, index) => {
        var { dataKey } = _a, other = __rest(_a, ["dataKey"]);
        return (React.createElement(Column, Object.assign({ key: dataKey, headerRenderer: (headerProps) => headerRenderer(Object.assign(Object.assign({}, headerProps), { columnIndex: index })), className: classes.flexContainer, cellRenderer: cellRenderer, dataKey: dataKey }, other)));
    })))));
});
export default memo(VirtualizedTable);
