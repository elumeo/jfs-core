"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var js_cookie_1 = __importDefault(require("js-cookie"));
var Card_1 = __importDefault(require("@material-ui/core/Card"));
var CardHeader_1 = __importDefault(require("@material-ui/core/CardHeader"));
var Select_1 = __importDefault(require("@material-ui/core/Select"));
var MenuItem_1 = __importDefault(require("@material-ui/core/MenuItem"));
var CardActions_1 = __importDefault(require("@material-ui/core/CardActions"));
var Button_1 = __importDefault(require("@material-ui/core/Button"));
var useActions_1 = __importDefault(require("../../../Store/useActions"));
var react_intl_1 = require("react-intl");
var Redux_1 = require("../../../Types/Redux");
var Container = function () {
    var changeLanguageAction = (0, useActions_1.default)().changeLanguageAction;
    var goBack = (0, react_router_dom_1.useHistory)().goBack;
    var formatMessage = (0, react_intl_1.useIntl)().formatMessage;
    var language = (0, Redux_1.useSelector)(function (state) { return state.Core.Language.language; });
    return (react_1.default.createElement(Card_1.default, { style: { width: 330, margin: 'auto' } },
        react_1.default.createElement(CardHeader_1.default, { title: formatMessage({ id: 'settings.title' }) }),
        react_1.default.createElement(Select_1.default, { id: 'language', label: formatMessage({ id: 'settings.language' }), value: language, onChange: function (e) {
                js_cookie_1.default.set('lang', e.target.value);
                changeLanguageAction(e.target.value);
            } },
            react_1.default.createElement(MenuItem_1.default, { value: 'de' }, "Deutsch"),
            react_1.default.createElement(MenuItem_1.default, { value: 'en' }, "English"),
            react_1.default.createElement(MenuItem_1.default, { value: 'it' }, "Italiano")),
        react_1.default.createElement(CardActions_1.default, { className: 'md-dialog-footer' },
            react_1.default.createElement(Button_1.default, { onClick: goBack }, formatMessage({ id: 'app.settings.done' })))));
};
exports.default = Container;
