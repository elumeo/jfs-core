"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable max-lines */
var react_1 = __importStar(require("react"));
var core_1 = require("@material-ui/core");
var icons_1 = require("@material-ui/icons");
var styles_1 = require("@material-ui/core/styles");
var react_redux_1 = require("react-redux");
var Action = __importStar(require("../Store/Action"));
var TableCellDefault_1 = require("./Table/TableCell/TableCellDefault");
var TableCell_1 = require("./Table/TableCell");
var Button_1 = require("./Button");
var TableRow_1 = require("./Table/TableRow");
var Search_1 = __importDefault(require("@material-ui/icons/Search"));
var TableCellSelect_1 = __importDefault(require("./Table/TableCell/TableCellSelect"));
var TableHeadSelect_1 = __importDefault(require("./Table/TableHead/TableHeadSelect"));
var Box_1 = __importDefault(require("@material-ui/core/Box"));
var tableRowHeight = 48;
var generateNotification = function (persist) {
    if (persist === void 0) { persist = false; }
    var rand = Math.round(Math.random() * 100000);
    var variant = rand % 7 == 0 && 'error'
        || rand % 5 == 0 && 'warning'
        || rand % 3 == 0 && 'success'
        || rand % 2 == 0 && 'info'
        || 'default';
    var id = String(rand);
    var group = variant.match(/(error|warning)/) ? 'important' : 'unimportant';
    var defaultProps = {
        id: id,
        group: group,
        variant: variant,
        notistackOptions: { persist: persist }
    };
    switch (variant) {
        case 'error':
            return __assign(__assign({}, defaultProps), { title: 'ServerError', subtitle: 'Join Room (action.payload.name)', content: react_1.default.createElement(Box_1.default, { display: 'flex', flexDirection: 'column' },
                    react_1.default.createElement("span", null, "Habitant habitasse, sem etiamnostra etiam. Tristique viverra volutpat mi, ornare non tellus, praesent odio justo platea erat quis. Aliquam est varius, fringilla class, in ad dictumst turpis vivamus eros augue. Nunc fames donec, vehicula phasellus, volutpat sem luctus leo ut. Consequat nulla enim, curae hac, lorem purus cursus feugiat habitant fusce. Ante metus curabitur, litora nec, donec diam bibendum euismod elit placerat neque. Pretium sit, morbi odio iaculis."),
                    react_1.default.createElement(Box_1.default, { display: 'flex', flexDirection: 'row' },
                        react_1.default.createElement(core_1.Button, { color: 'inherit', startIcon: react_1.default.createElement(icons_1.Refresh, null) }, "Try again"),
                        react_1.default.createElement(core_1.Button, { color: 'inherit', startIcon: react_1.default.createElement(icons_1.Block, null) }, "Ignore"))), action: function () { return react_1.default.createElement(core_1.IconButton, { color: 'inherit' },
                    react_1.default.createElement(icons_1.Visibility, null)); } });
        case 'warning':
            return __assign(__assign({}, defaultProps), { title: 'Warning', subtitle: 'Some changes aren\'t saved yet', content: 'The quick brown fox jumps over the lazy dog', action: function () { return react_1.default.createElement(core_1.IconButton, null,
                    react_1.default.createElement(icons_1.Visibility, null)); } });
        case 'success':
            return __assign(__assign({}, defaultProps), { title: 'Changes saved' });
        case 'info':
            return __assign(__assign({}, defaultProps), { content: 'Time for a cup of coffee!', action: function () { return react_1.default.createElement(core_1.Button, { color: 'inherit' }, "Get"); } });
        case 'default':
        default:
            return __assign(__assign({}, defaultProps), { variant: 'default', content: 'content loaded' });
    }
};
var sample = [
    ['Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt', 159, 6.0, 24, {
            start: null,
            end: null,
            isLiveShow: false
        }, null],
    ['Ice cream sandwich', 237, 9.0, 37, { start: new Date(), end: new Date(), isLiveShow: false }, new Date()],
    ['Eclair', 262, 16.0, 24, { start: new Date(2021, 9, 23, 8, 0, 15), end: new Date(), isLiveShow: false }, new Date()],
    ['Cupcake', 305, 3.7, 67, { start: new Date(), end: new Date(), isLiveShow: false }, new Date()],
    ['Gingerbread', 356, 16.0, 49, { start: new Date(), end: new Date(), isLiveShow: false }, new Date()]
];
var createDataVirtualizedTable = function (id, dessert, calories, fat, carbs, datetimeRange, datetime) { return ({
    id: id,
    dessert: dessert,
    calories: calories,
    fat: fat,
    carbs: carbs,
    datetimeRange: datetimeRange,
    datetime: datetime
}); };
var rows = [];
for (var i = 0; i < 200; i += 1) {
    var randomSelection = sample[Math.floor(Math.random() * sample.length)];
    rows.push(createDataVirtualizedTable.apply(void 0, __spreadArray([i], randomSelection, false)));
}
var columns = [
    {
        width: 50,
        dataKey: 'select',
        disableSort: true,
        headerRenderer: function () { return react_1.default.createElement(TableHeadSelect_1.default, { checked: false, onChange: console.log, height: tableRowHeight }); },
        cellRenderer: function (cellProps) { return react_1.default.createElement(TableCellSelect_1.default, { checked: false, value: cellProps.cellData, onChange: console.log, height: tableRowHeight }); }
    },
    {
        width: function (width) { return width - (120 * 4); },
        label: 'Dessert (100g serving)',
        dataKey: 'dessert',
        disableSort: true,
        cellRenderer: function (cellProps) { return react_1.default.createElement(TableCell_1.TableCellDefault, { height: tableRowHeight, cellData: cellProps.cellData, contentEllipseMode: TableCellDefault_1.ContentEllipseMode.Lines, contentEllipseLines: 2 }); }
    },
    {
        width: 120,
        label: 'Calories\u00A0(g)',
        dataKey: 'calories',
    },
    {
        width: 120,
        label: 'Fat\u00A0(g)',
        dataKey: 'fat',
    },
    {
        width: 120,
        label: 'Carbs\u00A0(g)',
        dataKey: 'carbs',
    },
    {
        width: 220,
        label: 'Datum (Range)',
        dataKey: 'datetimeRange',
        cellRenderer: function (cellProps) { return react_1.default.createElement(TableCell_1.TableCellDateTimeRange, { cellData: cellProps.cellData, height: tableRowHeight }); }
    },
    {
        width: 180,
        label: 'Datum',
        dataKey: 'datetime',
        cellRenderer: function (cellProps) { return react_1.default.createElement(TableCell_1.TableCellDateTime, { cellData: cellProps.cellData, height: tableRowHeight }); }
    }
];
var textFieldInputProps = { startAdornment: react_1.default.createElement(core_1.InputAdornment, { position: 'start' },
        react_1.default.createElement(Search_1.default, null)) };
// const selectMenuItems = [
//   <MenuItem value={'test 1'} key={'menu-item-1'}>Test 1</MenuItem>,
//   <MenuItem value={'test 2'} key={'menu-item-2'}>Test 2</MenuItem>,
//   <MenuItem value={'test 3'} key={'menu-item-3'}>Test 3</MenuItem>,
//   <MenuItem value={'test 4'} key={'menu-item-4'}>Test 4</MenuItem>
// ];
var Develop = function () {
    var theme = (0, styles_1.useTheme)();
    var dispatch = (0, react_redux_1.useDispatch)();
    var _a = (0, react_1.useState)(''), testTextFieldValue = _a[0], setTestTextFieldValue = _a[1];
    var noRowsRenderer = (0, react_1.useCallback)(function () { return react_1.default.createElement(TableRow_1.TableRowLoading, null); }, []);
    var rowGetter = (0, react_1.useCallback)(function (row) { return rows[row.index]; }, []);
    var handleTextFieldUpdate = (0, react_1.useCallback)(function (event) { return setTestTextFieldValue(event === null ? '' : event.target.value); }, []);
    var persistNotificationsRef = (0, react_1.useRef)(null);
    var handleOnClickNotification = (0, react_1.useCallback)(function () {
        var _a;
        var persist = (_a = persistNotificationsRef === null || persistNotificationsRef === void 0 ? void 0 : persistNotificationsRef.current) === null || _a === void 0 ? void 0 : _a.checked;
        dispatch(Action.addNotification(generateNotification(persist)));
    }, []);
    var handleRemoveNotificationsByGroup = (0, react_1.useCallback)(function (event) {
        dispatch(Action.removeNotificationGroup(event.target.value));
    }, []);
    var handleOnClickToast = (0, react_1.useCallback)(function () { return dispatch(Action.addToastAction({
        contentMessage: 'Toast Test',
        dismissLabel: 'Dismiss',
        isSuccess: true
    })); }, []);
    return (react_1.default.createElement("div", { style: { margin: theme.spacing(1) } },
        react_1.default.createElement(core_1.Grid, { container: true, spacing: 1, alignItems: 'center' },
            react_1.default.createElement(core_1.Grid, { item: true }),
            react_1.default.createElement(core_1.Grid, { item: true }),
            react_1.default.createElement(core_1.Grid, { item: true }),
            react_1.default.createElement(core_1.Grid, { item: true }),
            react_1.default.createElement(core_1.Grid, { item: true },
                react_1.default.createElement(core_1.FormControlLabel, { control: react_1.default.createElement(core_1.Checkbox, { inputRef: persistNotificationsRef }), label: 'persist' }),
                react_1.default.createElement(core_1.Button, { onClick: handleOnClickNotification }, "Add Notification"),
                react_1.default.createElement(core_1.NativeSelect, { value: 0, onChange: handleRemoveNotificationsByGroup },
                    react_1.default.createElement("option", { value: 0, disabled: true }, "Remove Notifications by group"),
                    react_1.default.createElement("option", { value: 'important' }, "All Important"),
                    react_1.default.createElement("option", { value: 'unimportant' }, "All Unimportant"))),
            react_1.default.createElement(core_1.Grid, { item: true },
                react_1.default.createElement(core_1.Button, { onClick: handleOnClickToast }, "Toast")),
            react_1.default.createElement(core_1.Grid, { item: true },
                react_1.default.createElement(Button_1.ButtonProgress, { inProgress: true, onClick: handleOnClickToast }, "Toast")))));
};
exports.default = Develop;
