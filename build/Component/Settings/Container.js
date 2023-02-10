"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
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
    return (react_1.default.createElement(Card_1.default, { sx: { width: 330, margin: 'auto' } },
        react_1.default.createElement(CardHeader_1.default, { title: formatMessage({ id: 'settings.title' }) }),
        react_1.default.createElement(Select_1.default, { id: 'language', label: formatMessage({ id: 'settings.language' }), value: language, onChange: function (e) {
                js_cookie_1.default.set('lang', e.target.value);
                dispatch((0, Action_1.changeLanguageAction)(e.target.value));
            } },
            react_1.default.createElement(MenuItem_1.default, { value: 'de' }, "Deutsch"),
            react_1.default.createElement(MenuItem_1.default, { value: 'en', color: 'secondary' }, "English"),
            react_1.default.createElement(MenuItem_1.default, { value: 'it' }, "Italiano")),
        react_1.default.createElement(CardActions_1.default, null,
            react_1.default.createElement(Button_1.default, { onClick: goBack }, formatMessage({ id: 'app.settings.done' })))));
};
exports.default = Container;
