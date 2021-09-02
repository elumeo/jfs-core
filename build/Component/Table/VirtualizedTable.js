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
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { AutoSizer, Column, Table } from 'react-virtualized';
import React, { memo } from 'react';
import clsx from 'clsx';
import { TableCellDefault } from '../Table/TableCell';
import TableHeadDefault from '../Table/TableHead/TableHeadDefault';
export const globalStyles = makeStyles((theme) => createStyles({
    flexContainer: {
        display: 'flex',
        alignItems: 'center',
        boxSizing: 'border-box',
        height: '100%'
    },
    tableCell: {
        flex: 1,
        padding: theme.spacing(1),
        maxWidth: '100%'
    }
}));
export const useStyles = makeStyles(theme => createStyles({
    table: {
        'borderCollapse': 'separate',
        '& .ReactVirtualized__Table__headerRow': {
            flip: false,
            paddingRight: theme.direction === 'rtl' ? '0 !important' : undefined,
            backgroundColor: theme.palette.background.paper,
            overflow: props => props.headerOverflow + ' !important'
        }
    },
    tableGrid: {
        outline: 'none'
    },
    tableRow: {
        outline: 'none'
    },
    tableRowHover: {
        '&:hover': {
            backgroundColor: theme.palette.grey[200]
        }
    },
    onRowClick: {
        cursor: 'pointer'
    }
}));
const VirtualizedTable = React.forwardRef((props, ref) => {
    const { columns = [], onRowClick = null, rowCount, rowGetter, headerHeight = 48, rowHeight = 48, showRowHoverHighlight = false, headerOverflow = 'hidden', onResize } = props, tableProps = __rest(props, ["columns", "onRowClick", "rowCount", "rowGetter", "headerHeight", "rowHeight", "showRowHoverHighlight", "headerOverflow", "onResize"]);
    const globalClasses = globalStyles();
    const classes = useStyles(Object.assign(Object.assign({}, props), { onRowClick: onRowClick, headerHeight: headerHeight, rowHeight: rowHeight, showRowHoverHighlight: showRowHoverHighlight, headerOverflow: headerOverflow }));
    const getRowClassName = (index) => clsx(classes.tableRow, globalClasses.flexContainer, {
        [classes.tableRowHover]: index.index !== -1 && showRowHoverHighlight === true,
        [classes.onRowClick]: onRowClick !== null
    });
    return (React.createElement(AutoSizer, { onResize: onResize }, ({ height, width }) => (React.createElement(Table, Object.assign({ ref: ref, height: height, width: width, className: classes.table, headerHeight: headerHeight, rowHeight: rowHeight, rowCount: rowCount, rowGetter: rowGetter, rowClassName: getRowClassName, onRowClick: onRowClick, gridStyle: { direction: 'inherit' }, gridClassName: classes.tableGrid }, tableProps), columns.map((_a, index) => {
        var { dataKey } = _a, other = __rest(_a, ["dataKey"]);
        return (React.createElement(Column, Object.assign({ key: dataKey, headerStyle: { outline: 'none' }, headerRenderer: headerProps => {
                const columnData = headerProps.columnData !== undefined ? headerProps.columnData : {};
                columnData.index = index;
                columnData.numeric = columns[index].numeric;
                columnData.headerHeight = headerHeight;
                return React.createElement(TableHeadDefault, { headerProps: Object.assign(Object.assign({}, headerProps), { columnData: columnData }) });
            }, className: globalClasses.flexContainer, cellRenderer: ({ cellData, columnIndex }) => React.createElement(TableCellDefault, { cellData: cellData, isNumeric: (columnIndex != null && columns[columnIndex].numeric) || false }), dataKey: dataKey }, other)));
    })))));
});
export default memo(VirtualizedTable);
