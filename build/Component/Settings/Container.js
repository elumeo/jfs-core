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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("@welldone-software/why-did-you-render/jsx-runtime");
var react_router_dom_1 = require("react-router-dom");
var js_cookie_1 = __importDefault(require("js-cookie"));
var Card_1 = __importDefault(require("@mui/material/Card"));
var CardHeader_1 = __importDefault(require("@mui/material/CardHeader"));
var Select_1 = __importDefault(require("@mui/material/Select"));
var MenuItem_1 = __importDefault(require("@mui/material/MenuItem"));
var CardActions_1 = __importDefault(require("@mui/material/CardActions"));
var Button_1 = __importDefault(require("@mui/material/Button"));
var react_intl_1 = require("react-intl");
var Redux_1 = require("../../Types/Redux");
var react_redux_1 = require("react-redux");
var Action_1 = require("../../Store/Action");
var Container = function () {
    var dispatch = (0, react_redux_1.useDispatch)();
    var navigate = (0, react_router_dom_1.useNavigate)();
    var formatMessage = (0, react_intl_1.useIntl)().formatMessage;
    var language = (0, Redux_1.useSelector)(function (state) { return state.Core.Language.language; });
    var goBack = function () { return navigate(-1); };
    return ((0, jsx_runtime_1.jsxs)(Card_1.default, __assign({ sx: { width: 330, margin: 'auto' } }, { children: [(0, jsx_runtime_1.jsx)(CardHeader_1.default, { title: formatMessage({ id: 'settings.title' }) }), (0, jsx_runtime_1.jsxs)(Select_1.default, __assign({ id: 'language', label: formatMessage({ id: 'settings.language' }), value: language, onChange: function (e) {
                    js_cookie_1.default.set('lang', e.target.value);
                    dispatch((0, Action_1.changeLanguageAction)(e.target.value));
                } }, { children: [(0, jsx_runtime_1.jsx)(MenuItem_1.default, __assign({ value: 'de' }, { children: "Deutsch" })), (0, jsx_runtime_1.jsx)(MenuItem_1.default, __assign({ value: 'en', color: 'secondary' }, { children: "English" })), (0, jsx_runtime_1.jsx)(MenuItem_1.default, __assign({ value: 'it' }, { children: "Italiano" }))] })), (0, jsx_runtime_1.jsx)(CardActions_1.default, { children: (0, jsx_runtime_1.jsx)(Button_1.default, __assign({ onClick: goBack }, { children: formatMessage({ id: 'app.settings.done' }) })) })] })));
};
exports.default = Container;
