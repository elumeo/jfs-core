"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
var react_1 = __importDefault(require("react"));
var core_1 = require("@material-ui/core");
var icons_1 = require("@material-ui/icons");
var styles_1 = require("@material-ui/core/styles");
var Currency_1 = require("../Utilities/Format/Currency");
var react_redux_1 = require("react-redux");
var Action = __importStar(require("../Store/Action"));
var uuid_1 = require("uuid");
var Table_1 = require("./Table");
var TextFieldClearButton_1 = __importDefault(require("./TextFieldClearButton"));
var TableCellDefaultBase_1 = require("./Table/TableCell/TableCellDefaultBase");
var TableCell_1 = require("./Table/TableCell");
var Button_1 = require("./Button");
var Card_1 = require("./Card");
var TableRow_1 = require("./Table/TableRow");
var sample = [
    ['Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt', 159, 6.0, 24, 4.0],
    ['Ice cream sandwich', 237, 9.0, 37, 4.3],
    ['Eclair', 262, 16.0, 24, 6.0],
    ['Cupcake', 305, 3.7, 67, 4.3],
    ['Gingerbread', 356, 16.0, 49, 3.9]
];
var createDataVirtualizedTable = function (id, dessert, calories, fat, carbs, protein) { return ({ id: id, dessert: dessert, calories: calories, fat: fat, carbs: carbs, protein: protein }); };
var rows = [];
for (var i = 0; i < 200; i += 1) {
    var randomSelection = sample[Math.floor(Math.random() * sample.length)];
    rows.push(createDataVirtualizedTable.apply(void 0, __spreadArray([i], randomSelection, false)));
}
var Develop = function () {
    var theme = (0, styles_1.useTheme)();
    var dispatch = (0, react_redux_1.useDispatch)();
    return (react_1.default.createElement("div", { style: { margin: theme.spacing(1) } },
        react_1.default.createElement(core_1.Card, null,
            react_1.default.createElement(Card_1.AppCardHeader, { title: 'Test' }),
            react_1.default.createElement(Card_1.AppCardContent, null, "Das ist der Inhalt")),
        react_1.default.createElement(core_1.Grid, { container: true, spacing: 1, alignItems: 'center' },
            react_1.default.createElement(core_1.Grid, { item: true },
                react_1.default.createElement(TextFieldClearButton_1.default, { label: 'Textfield', onChange: console.log, iconButtonSize: 'small' })),
            react_1.default.createElement(core_1.Grid, { item: true },
                react_1.default.createElement(core_1.Button, { onClick: function () { return dispatch(Action.addNotification({
                        id: (0, uuid_1.v4)(),
                        title: 'Error',
                        subtitle: 'Join Room (action.payload.name)',
                        content: 'MESSAGE',
                        variant: 'error'
                    })); } }, "Notification")),
            react_1.default.createElement(core_1.Grid, { item: true },
                react_1.default.createElement(core_1.Button, { onClick: function () { return dispatch(Action.addToastAction({
                        contentMessage: 'Toast Test',
                        dismissLabel: 'Dismiss',
                        isSuccess: true
                    })); } }, "Toast")),
            react_1.default.createElement(core_1.Grid, { item: true },
                react_1.default.createElement(Button_1.ButtonProgress, { inProgress: true, onClick: function () { return dispatch(Action.addToastAction({
                        contentMessage: 'Toast Test',
                        dismissLabel: 'Dismiss',
                        isSuccess: true
                    })); } }, "Toast"))),
        react_1.default.createElement("div", { style: { marginTop: theme.spacing(1) } },
            react_1.default.createElement(core_1.List, null,
                react_1.default.createElement(core_1.ListItem, null,
                    react_1.default.createElement(core_1.ListItemText, { secondary: 'getCurrency(\'EUR\', 100, true, true, true)' }, (0, Currency_1.getCurrency)('EUR', 100, true, true, true))),
                react_1.default.createElement(core_1.ListItem, null,
                    react_1.default.createElement(core_1.ListItemText, { secondary: 'getCurrency(\'EUR\', 100, true, true, false)' }, (0, Currency_1.getCurrency)('EUR', 100, true, true, false))),
                react_1.default.createElement(core_1.ListItem, null,
                    react_1.default.createElement(core_1.ListItemText, { secondary: 'getCurrency(\'EUR\', 100.00, true, true, true)' }, (0, Currency_1.getCurrency)('EUR', 100.00, true, true, true))),
                react_1.default.createElement(core_1.ListItem, null,
                    react_1.default.createElement(core_1.ListItemText, { secondary: 'getCurrency(\'EUR\', 100.00, true, true, false)' }, (0, Currency_1.getCurrency)('EUR', 100.00, true, true, false))),
                react_1.default.createElement(core_1.ListItem, null,
                    react_1.default.createElement(core_1.ListItemText, { secondary: 'getCurrency(\'EUR\', 100.5, true, true, true)' }, (0, Currency_1.getCurrency)('EUR', 100.5, true, true, true))),
                react_1.default.createElement(core_1.ListItem, null,
                    react_1.default.createElement(core_1.ListItemText, { secondary: 'getCurrency(\'EUR\', 100.5, true, true, false)' }, (0, Currency_1.getCurrency)('EUR', 100.5, true, true, false))),
                react_1.default.createElement(core_1.ListItem, null,
                    react_1.default.createElement(core_1.ListItemText, { secondary: 'getCurrency(\'EUR\', 100.50, true, true, true)' }, (0, Currency_1.getCurrency)('EUR', 100.50, true, true, true))),
                react_1.default.createElement(core_1.ListItem, null,
                    react_1.default.createElement(core_1.ListItemText, { secondary: 'getCurrency(\'EUR\', 100.50, true, true, false)' }, (0, Currency_1.getCurrency)('EUR', 100.50, true, true, false))),
                react_1.default.createElement(core_1.ListItem, null,
                    react_1.default.createElement(core_1.ListItemText, { secondary: 'getCurrency(\'EUR\', 100.75, true, true, true)' }, (0, Currency_1.getCurrency)('EUR', 100.75, true, true, true))),
                react_1.default.createElement(core_1.ListItem, null,
                    react_1.default.createElement(core_1.ListItemText, { secondary: 'getCurrency(\'EUR\', 100.75, true, true, false)' }, (0, Currency_1.getCurrency)('EUR', 100.75, true, true, false))))),
        react_1.default.createElement("div", { style: { marginTop: theme.spacing(1) } },
            react_1.default.createElement(core_1.Grid, { container: true },
                react_1.default.createElement(core_1.Grid, { item: true },
                    react_1.default.createElement(core_1.Typography, { style: { margin: theme.spacing(1), padding: theme.spacing(1), backgroundColor: theme.palette.info.main, color: theme.palette.getContrastText(theme.palette.info.main) } }, "Info")),
                react_1.default.createElement(core_1.Grid, { item: true },
                    react_1.default.createElement(core_1.Typography, { style: {
                            margin: theme.spacing(1),
                            padding: theme.spacing(1),
                            backgroundColor: theme.palette.error.main,
                            color: theme.palette.getContrastText(theme.palette.error.main)
                        } }, "Error")),
                react_1.default.createElement(core_1.Grid, { item: true },
                    react_1.default.createElement(core_1.Typography, { style: {
                            margin: theme.spacing(1),
                            padding: theme.spacing(1),
                            backgroundColor: theme.palette.warning.main,
                            color: theme.palette.getContrastText(theme.palette.warning.main)
                        } }, "Warning")),
                react_1.default.createElement(core_1.Grid, { item: true },
                    react_1.default.createElement(core_1.Typography, { style: {
                            margin: theme.spacing(1),
                            padding: theme.spacing(1),
                            backgroundColor: theme.palette.success.main,
                            color: theme.palette.getContrastText(theme.palette.success.main)
                        } }, "Success")))),
        react_1.default.createElement("div", { style: { marginTop: theme.spacing(1) } },
            react_1.default.createElement(core_1.Grid, { container: true, spacing: 1 },
                react_1.default.createElement(core_1.Grid, { item: true, xs: 3 },
                    react_1.default.createElement(core_1.Paper, null,
                        react_1.default.createElement(core_1.List, { dense: true },
                            react_1.default.createElement(core_1.ListItem, { button: true, selected: true },
                                react_1.default.createElement(core_1.ListItemIcon, null,
                                    react_1.default.createElement(icons_1.AccountCircle, null)),
                                react_1.default.createElement(core_1.ListItemText, { primary: 'primary111', secondary: 'secondary222' })),
                            react_1.default.createElement(core_1.ListItem, { button: true, selected: false },
                                react_1.default.createElement(core_1.ListItemIcon, null,
                                    react_1.default.createElement(icons_1.ContactPhone, null)),
                                react_1.default.createElement(core_1.ListItemText, { primary: 'primary222', secondary: 'secondary222' }))))),
                react_1.default.createElement(core_1.Grid, { item: true, xs: 3 },
                    react_1.default.createElement(core_1.Paper, null,
                        react_1.default.createElement(core_1.List, null,
                            react_1.default.createElement(core_1.ListItem, { button: true, selected: true },
                                react_1.default.createElement(core_1.ListItemIcon, null,
                                    react_1.default.createElement(icons_1.AccountCircle, null)),
                                react_1.default.createElement(core_1.ListItemText, { primary: 'primary111', secondary: 'secondary222' })),
                            react_1.default.createElement(core_1.ListItem, { button: true, selected: false },
                                react_1.default.createElement(core_1.ListItemIcon, null,
                                    react_1.default.createElement(icons_1.ContactPhone, null)),
                                react_1.default.createElement(core_1.ListItemText, { primary: 'primary222', secondary: 'secondary222' }))))),
                react_1.default.createElement(core_1.Grid, { item: true, xs: 3 },
                    react_1.default.createElement(core_1.Card, null,
                        react_1.default.createElement(core_1.CardContent, null,
                            react_1.default.createElement(core_1.Grid, { container: true, spacing: 1 },
                                react_1.default.createElement(core_1.Grid, { item: true },
                                    react_1.default.createElement(core_1.Chip, { label: 'label label1', icon: react_1.default.createElement(icons_1.ContactPhone, null) })),
                                react_1.default.createElement(core_1.Grid, { item: true },
                                    react_1.default.createElement(core_1.Chip, { label: 'label label2', clickable: true, icon: react_1.default.createElement(icons_1.AccountCircle, null) })),
                                react_1.default.createElement(core_1.Grid, { item: true },
                                    react_1.default.createElement(core_1.Chip, { size: 'small', label: 'label label3', clickable: true, icon: react_1.default.createElement(icons_1.AccountCircle, null) })))))))),
        react_1.default.createElement("div", { style: { marginTop: theme.spacing(1) } },
            react_1.default.createElement(core_1.Card, null,
                react_1.default.createElement(core_1.CardContent, { style: { height: 600 } },
                    react_1.default.createElement(Table_1.VirtualizedTable, { showRowHoverHighlight: true, rowHeight: 50, rowCount: rows.length, rowGetter: function (row) { return rows[row.index]; }, noRowsRenderer: function () { return react_1.default.createElement(TableRow_1.TableRowLoading, null); }, sortBy: 'calories', sortDirection: 'ASC', columns: [
                            {
                                // width: 200,
                                // flexGrow: 1,
                                width: function (width) { return width - (120 * 4); },
                                label: 'Dessert (100g serving)',
                                dataKey: 'dessert',
                                disableSort: true,
                                cellRenderer: function (cellProps) { return react_1.default.createElement(TableCell_1.TableCellDefault, { cellData: cellProps.cellData, contentEllipseMode: TableCellDefaultBase_1.ContentEllipseMode.Lines, contentEllipseLines: 2 }); }
                            },
                            {
                                width: 120,
                                label: 'Calories\u00A0(g)',
                                dataKey: 'calories',
                                numeric: true
                            },
                            {
                                width: 120,
                                label: 'Fat\u00A0(g)',
                                dataKey: 'fat',
                                numeric: true
                            },
                            {
                                width: 120,
                                label: 'Carbs\u00A0(g)',
                                dataKey: 'carbs',
                                numeric: true
                            },
                            {
                                width: 120,
                                label: 'Protein\u00A0(g)',
                                dataKey: 'protein',
                                numeric: true
                            }
                        ] }))))));
};
exports.default = Develop;
