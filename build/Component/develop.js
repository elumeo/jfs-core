"use strict";
/* eslint-disable max-lines */
// noinspection ES6UnusedImports,JSUnusedLocalSymbols
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
var react_1 = __importStar(require("react"));
var core_1 = require("@material-ui/core");
var icons_1 = require("@material-ui/icons");
var styles_1 = require("@material-ui/core/styles");
var react_redux_1 = require("react-redux");
var Action = __importStar(require("../Store/Action"));
var Table_1 = require("./Table");
var TextFieldClearButton_1 = __importDefault(require("./TextFieldClearButton"));
var TableCellDefault_1 = require("./Table/TableCell/TableCellDefault");
var TableCell_1 = require("./Table/TableCell");
var Button_1 = require("./Button");
var Card_1 = require("./Card");
var TableRow_1 = require("./Table/TableRow");
var Search_1 = __importDefault(require("@material-ui/icons/Search"));
var Icon_1 = require("./Icon");
var Warning_1 = __importDefault(require("@material-ui/icons/Warning"));
var TableCellSelect_1 = __importDefault(require("./Table/TableCell/TableCellSelect"));
var TableHeadSelect_1 = __importDefault(require("./Table/TableHead/TableHeadSelect"));
var Box_1 = __importDefault(require("@material-ui/core/Box"));
var DatePicker_1 = __importDefault(require("./DatePicker"));
var SelectClearButton_1 = __importDefault(require("./SelectClearButton"));
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
        dataKey: 'calories'
    },
    {
        width: 120,
        label: 'Fat\u00A0(g)',
        dataKey: 'fat'
    },
    {
        width: 120,
        label: 'Carbs\u00A0(g)',
        dataKey: 'carbs'
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
var createProductDataVirtualizedTable = function (index) { return ({
    rowIndex: index,
    isProductBundle: true,
    hasNoTvLock: true,
    id: '4716YT',
    name: 'Das ist ein sehr langer Produktname Das ist ein sehr langer Produktname',
    inStockPool: true,
    productType: null,
    mediaUris: [{
            productId: '4716YT',
            uri: 'https://api-test.juwelo.de/media/small/4716YT.jpg'
        }],
    height: 100
}); };
var productRows = [];
for (var i = 0; i < 200; i += 1) {
    productRows.push(createProductDataVirtualizedTable(i));
}
var Develop = function () {
    var theme = (0, styles_1.useTheme)();
    var dispatch = (0, react_redux_1.useDispatch)();
    var _a = (0, react_1.useState)(''), testTextFieldValue = _a[0], setTestTextFieldValue = _a[1];
    var _b = (0, react_1.useState)(''), singleSelectValue = _b[0], setSingleSelectValue = _b[1];
    var _c = (0, react_1.useState)(['test 1']), multipleSelectValue = _c[0], setMultipleSelectValue = _c[1];
    var _d = (0, react_1.useState)(null), testDatePickerValue = _d[0], setTestDatePickerValue = _d[1];
    var noRowsRenderer = (0, react_1.useCallback)(function () { return react_1.default.createElement(TableRow_1.TableRowLoading, null); }, []);
    var rowGetter = (0, react_1.useCallback)(function (row) { return rows[row.index]; }, []);
    var productRowGetter = (0, react_1.useCallback)(function (row) { return productRows[row.index]; }, []);
    var handleSingleSelectUpdate = (0, react_1.useCallback)(function (value) { return setSingleSelectValue(value); }, []);
    var handleMultipleSelectUpdate = (0, react_1.useCallback)(function (value) { return setMultipleSelectValue(value); }, []);
    var handleTextFieldUpdate = (0, react_1.useCallback)(function (event) { return setTestTextFieldValue(event === null ? '' : event.target.value); }, []);
    var persistNotificationsRef = (0, react_1.useRef)(null);
    var handleOnClickNotification = (0, react_1.useCallback)(function () {
        var _a;
        var persist = (_a = persistNotificationsRef === null || persistNotificationsRef === void 0 ? void 0 : persistNotificationsRef.current) === null || _a === void 0 ? void 0 : _a.checked;
        dispatch(Action.addNotification(generateNotification(persist)));
    }, []);
    var handleOnClickErrorNotification = (0, react_1.useCallback)(function () {
        dispatch(Action.addErrorNotification({
            config: {},
            toJSON: function () { return ({}); },
            isAxiosError: true,
            name: 'An AxiosError',
            message: 'Error Message',
            request: {},
            response: {
                config: {},
                headers: {},
                status: 23,
                statusText: '23',
                data: {
                    "error": "DI\\DependencyException",
                    "id": 0,
                    "message": "Error while injecting in AuthorizationService\\Services\\UserPasswordService::userPasswordDAO. SQLSTATE[HY000] [2002] php_network_getaddresses: getaddrinfo failed: nodename nor servname provided, or not known",
                    "trace": [
                        "#0 /Users/user/Projects/Juwelo/git/jsc/core/Libraries/Jsc/Service/Client/AbstractClient.php(169): Jsc\\Service\\Client\\AbstractClient->processHttpResponse(Object(Jsc\\Http\\Response))",
                        "#1 /Users/user/Projects/Juwelo/git/jsc/core/Shared/Clients/AuthorizationService/UserPasswordClient.php(57): Jsc\\Service\\Client\\AbstractClient->sendRequest(Object(Jsc\\Service\\Request\\Post), NULL)",
                        "#2 /Users/user/Projects/Juwelo/git/jsc/api/ServiceProxy/Services/Authorization/LoginService.php(172): Clients\\AuthorizationService\\UserPasswordClient->checkPassword('robert.neuner', Object(DTO\\Login\\CredentialsDTO))",
                        "#3 /Users/user/Projects/Juwelo/git/jsc/api/ServiceProxy/Services/Authorization/LoginService.php(87): ServiceProxy\\Services\\Authorization\\LoginService->checkPassword('robert.neuner', 'JuwJawJowJooo')",
                        "#4 /Users/user/Projects/Juwelo/git/jsc/api/ServiceProxy/Controllers/LoginController.php(98): ServiceProxy\\Services\\Authorization\\LoginService->loginFrontend('robert.neuner', 'Robert Neuner', 'JuwJawJowJooo', 'jfs_CustomerImp...')",
                        "#5 [internal function]: ServiceProxy\\Controllers\\LoginController->loginFrontend('jfs_CustomerImp...', Object(DTO\\Login\\CredentialsDTO))",
                        "#6 /Users/user/Projects/Juwelo/git/jsc/core/Libraries/Jsc/Service/Controller/AbstractController.php(78): call_user_func_array(Array, Array)",
                        "#7 /Users/user/Projects/Juwelo/git/jsc/core/Libraries/Jsc/Service/Dispatcher.php(87): Jsc\\Service\\Controller\\AbstractController->execute('loginFrontend', Array)",
                        "#8 /Users/user/Projects/Juwelo/git/jsc/core/Libraries/Jsc/Service/Bootstrap.php(252): Jsc\\Service\\Dispatcher->run()",
                        "#9 /Users/user/Projects/Juwelo/git/jsc/core/Libraries/Jsc/Service/Bootstrap.php(118): Jsc\\Service\\Bootstrap::runApplication('api', Object(Jsc\\Http\\Request), Object(Jsc\\Http\\Response), Object(Jsc\\Routing\\Router), 1651061331.2091)",
                        "#10 /Users/user/Projects/Juwelo/git/jsc/www-root/api.php(59): Jsc\\Service\\Bootstrap::boot('/Users/user/Pro...', 'api', 1651061331.2091)",
                        "#11 {main}"
                    ]
                }
            }
        }));
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
        react_1.default.createElement(core_1.Card, null,
            react_1.default.createElement(Card_1.AppCardHeader, { title: 'Test', titleIcon: react_1.default.createElement(Warning_1.default, null), onRefresh: console.log }),
            react_1.default.createElement(Card_1.AppCardContent, null,
                "Das ist der Inhalt",
                react_1.default.createElement(core_1.IconButton, { size: 'small', color: 'secondary' },
                    react_1.default.createElement(Icon_1.FilterReset, null)),
                react_1.default.createElement(core_1.Grid, { container: true, spacing: 2 },
                    react_1.default.createElement(core_1.Grid, { item: true },
                        react_1.default.createElement(DatePicker_1.default, { label: 'DatePicker', onChange: console.log, value: testDatePickerValue, isClearable: false })),
                    react_1.default.createElement(core_1.Grid, { item: true },
                        react_1.default.createElement(TextFieldClearButton_1.default, { label: 'Textfield', onChange: handleTextFieldUpdate, value: testTextFieldValue, clearButtonSize: 'small', InputProps: textFieldInputProps })),
                    react_1.default.createElement(core_1.Grid, { item: true },
                        react_1.default.createElement(TextFieldClearButton_1.default, { disabled: true, label: 'Textfield', onChange: handleTextFieldUpdate, value: testTextFieldValue, clearButtonSize: 'small' })),
                    react_1.default.createElement(core_1.Grid, { item: true, xs: 1 },
                        react_1.default.createElement(SelectClearButton_1.default, { fullWidth: true, label: 'Single select', onChange: handleSingleSelectUpdate, value: singleSelectValue, clearButtonSize: 'small', renderValueAsChip: true, options: [
                                { value: 'test 1', label: 'Test 1' },
                                { value: 'test 2', label: 'Test 2' },
                                { value: 'test 3', label: 'Test 3' },
                                { value: 'test 4', label: 'Test 4' },
                                { value: 'DasIstEinSehrLangerWert', label: 'Das ist ein sehr langer Wert' },
                                { value: 'DasIstEinSehrLangerWertMal2', label: 'Das ist ein sehr langer Wert Das ist ein sehr langer Wert' },
                            ] })),
                    react_1.default.createElement(core_1.Grid, { item: true, xs: 1 },
                        react_1.default.createElement(SelectClearButton_1.default, { fullWidth: true, label: 'Multiple select', onChange: handleMultipleSelectUpdate, value: multipleSelectValue, clearButtonSize: 'small', multiple: true, maxValuesToDisplayInInput: 2, renderValueAsChip: true, options: [
                                { value: 'test 1', label: 'Test 1 Das ist ein sehr langer Wert Wert Wert Wert' },
                                { value: 'test 2', label: 'Test 2' },
                                { value: 'test 3', label: 'Test 3' },
                                { value: 'test 4', label: 'Test 4' },
                                { value: 'DasIstEinSehrLangerWert', label: 'Das ist ein sehr langer Wert' },
                                { value: 'DasIstEinSehrLangerWertMal2', label: 'Das ist ein sehr langer Wert Das ist ein sehr langer Wert' },
                            ] })),
                    react_1.default.createElement(core_1.Grid, { item: true },
                        react_1.default.createElement(core_1.Button, { onClick: function () { return setMultipleSelectValue(['test 1']); }, color: 'primary' }, "Set Multiple Select Value"))))),
        react_1.default.createElement(core_1.Grid, { container: true, spacing: 1, alignItems: 'center' },
            react_1.default.createElement(core_1.Grid, { item: true },
                react_1.default.createElement(Icon_1.CustomerCard, null)),
            react_1.default.createElement(core_1.Grid, { item: true },
                react_1.default.createElement(core_1.FormControlLabel, { control: react_1.default.createElement(core_1.Checkbox, { inputRef: persistNotificationsRef }), label: 'persist' }),
                react_1.default.createElement(core_1.Button, { onClick: handleOnClickNotification }, "Add Notification"),
                react_1.default.createElement(core_1.Button, { onClick: handleOnClickErrorNotification }, "Add Error Notification"),
                react_1.default.createElement(core_1.NativeSelect, { value: 0, onChange: handleRemoveNotificationsByGroup },
                    react_1.default.createElement("option", { value: 0, disabled: true }, "Remove Notifications by group"),
                    react_1.default.createElement("option", { value: 'important' }, "All Important"),
                    react_1.default.createElement("option", { value: 'unimportant' }, "All Unimportant"))),
            react_1.default.createElement(core_1.Grid, { item: true },
                react_1.default.createElement(core_1.Button, { onClick: handleOnClickToast }, "Toast")),
            react_1.default.createElement(core_1.Grid, { item: true },
                react_1.default.createElement(Button_1.ButtonProgress, { inProgress: true, onClick: handleOnClickToast }, "Toast"))),
        react_1.default.createElement("div", { style: { marginTop: theme.spacing(1) } },
            react_1.default.createElement(core_1.Grid, { container: true },
                react_1.default.createElement(core_1.Grid, { item: true },
                    react_1.default.createElement(core_1.Typography, { style: {
                            margin: theme.spacing(1),
                            padding: theme.spacing(1),
                            backgroundColor: theme.palette.info.main,
                            color: theme.palette.getContrastText(theme.palette.info.main)
                        } }, "Info")),
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
                react_1.default.createElement(core_1.CardContent, { style: { height: 300 } },
                    react_1.default.createElement(core_1.TableContainer, { style: { maxHeight: 260 } },
                        react_1.default.createElement(core_1.Table, { stickyHeader: true },
                            react_1.default.createElement(core_1.TableHead, null,
                                react_1.default.createElement(core_1.TableRow, null, ['calories', 'carbs', 'dessert', 'fat', 'id', 'protein'].map(function (column, index) { return react_1.default.createElement(core_1.TableCell, { key: 'column-head-index-' + index }, column); }))),
                            react_1.default.createElement(core_1.TableBody, null, rows.map(function (row, index) { return react_1.default.createElement(core_1.TableRow, { key: 'row-body-index' + index },
                                react_1.default.createElement(core_1.TableCell, null, row.calories),
                                react_1.default.createElement(core_1.TableCell, null, row.carbs),
                                react_1.default.createElement(core_1.TableCell, null, row.dessert),
                                react_1.default.createElement(core_1.TableCell, null, row.fat),
                                react_1.default.createElement(core_1.TableCell, null, row.id)); }))))))),
        react_1.default.createElement("div", { style: { marginTop: theme.spacing(1) } },
            react_1.default.createElement(core_1.Card, null,
                react_1.default.createElement(core_1.CardContent, { style: { height: 300 } },
                    react_1.default.createElement(Table_1.VirtualizedTable, { headerHeight: 50, rowHeight: 100, rowCount: 200, rowGetter: productRowGetter, showRowHoverHighlight: true, columns: [
                            {
                                dataKey: 'product',
                                width: 400,
                                cellRenderer: function (cellProps) { return react_1.default.createElement(TableCell_1.TableCellProduct, __assign({}, cellProps.rowData)); }
                            }
                        ] }))))));
};
exports.default = Develop;
